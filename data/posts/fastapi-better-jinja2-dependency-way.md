---
layout: post
title: "FastAPI Tips : Better Jinja2 Dependency Way"
description: "Flexible and fast way to use Jinja2 template in FastAPI"
date: 2021-08-17T18:06:00+07:00
tags: ["web", "fastapi", "backend", "jinja", "api"]
---

In official docs of FastAPI about templating using Jinja2, it shows a way to inject `request` object and use predefined `TemplateResponse` class to render Jinja2 template to HTML Response.

```python
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory="templates")


@app.get("/items/{id}", response_class=HTMLResponse)
async def read_item(request: Request, id: str):
    return templates.TemplateResponse("item.html", {"request": request, "id": id})
```

This is good way, but it lacks flexibility and better declaration (you see we have to inject request to any endpoint using Jinja). So this is my way ;)

In `deps.py` file

```python
import typing
from jinja2 import Environment, contextfunction
from jinja2.loaders import PackageLoader
from fastapi import Request, Depends

''' Get Jinja2 dependency function, you can define more functions, filters or global vars here '''
def get_jinja2():
    @contextfunction
    def url_for(context: dict, name: str, **path_params: typing.Any) -> str:
        request = context["request"]
        return request.url_for(name, **path_params)

    env = Environment(loader=PackageLoader("yourpackage"), autoescape=True)
    env.globals["url_for"] = url_for

    return env

''' Get view render function using Jinja2 environment injected above '''
def get_view(tpl : str):
    def func_view(request: Request, env : Environment = Depends(get_jinja2)):
        template = env.get_template(tpl)
        def render(*args, **kwargs):
            return template.render(request=request, *args, **kwargs)
        return render
    return func_view
```

Now, we use these dependency function in router function

```python
from starlette.responses import HTMLResponse
from fastapi import FastAPI Depends
from yourpackage.deps import get_view

app = FastAPI()

''' We inject render function directly into router function with declared template file name, it makes more senses ! '''
@app.get('/hello/{name}', response_class=HTMLResponse)
def hello(name : str, render = Depends(get_view('hello.html')))
    return render({"name": name})
```

In `templates/hello.html` file

```html
<h1>Hello {{ name }} !</h1>
```

Try open `http://localhost:8000/hello/world` , then we get

```html
<h1>Hello World !</h1>
```

ENJOY ! ;)
