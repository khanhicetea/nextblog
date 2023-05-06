---
layout: post
title: "[Series mới] : Học lập trình Web bằng PHP và MySQL"
date: 2018-10-30T23:15:41+07:00
description: "Học PHP một cách tinh gọn dễ hiểu và đúng hướng !"
categories: ["php"]
tags: ["php", "vietnamese"]
image: "/static/images/2018/10/php-0-to-1.png"
toc: true

---

## Giới thiệu

Xin chào các bạn, sắp tới mình sẽ cố gắng viết về một chuyên đề mới đó là "Học lập trình Web bằng PHP và MySQL" từ cơ bản đến nâng cao (cơ bản là ở mức chưa biết gì về lập trình web, nâng cao là ở mức bạn có thể xin vào làm ở một công ty về lập trình web dạng kha khá có tiếng).

Chuyên đề này là do mình tự tay biên soạn dựa trên kinh nghiệm ít ỏi 7 năm làm trong mảng này, mình thừa nhận mình cũng không phải là chuyên gia về mảng này nhưng có thể nói là đủ kiến thức nền và kinh nghiệm trong các dự án thực tế từ nhỏ tới tầm trung. Mong rằng những kiến thức mình đúc kết bên dưới sẽ cho bạn nguồn kiến thức bổ ích, hoặc chí ít là cũng có định hướng sẽ nên học gì tiếp theo để nâng cao trình độ mình lên.

*Các bạn có thể nghĩ rằng những chuyên đề này trên mạng thiếu gì, tại sao còn làm chi cho tốn công phí sức ? Và chuyên đề này có gì đặc biệt hơn những cái đã có trước đó ?*

Mình xin trả lời ngắn gọn đây chỉ là một dự án chuyên đề nhỏ của mình muốn đóng góp cho cộng đồng, những lập trình viên mới vào nghề hay những sinh viên đam mê công nghệ thông tin có thể dễ dàng tiếp cận qua những bài viết tinh gọn và trực quan. Trên mạng đã có những chuyên đề tốt hơn bằng tiếng Anh nhưng mình nghĩ rất khó để các bạn có vốn tiếng Anh không được tốt và cái nữa là do quá nhiều trang thông tin sẽ làm các bạn dễ bị nhiễu thông tin dẫn đến sai đường lạc hướng rồi kết quả không đi tới đâu.

Mọi đóng góp ý kiến, các bạn có thể comment bên dưới từng bài viết trong chuyên đề này hoặc có thể mail trực tiếp cho mình tại **hi@khanhicetea.com** !

Dưới đây là guidelines bằng tiếng Anh mình soạn ra để mình nháp bố cục nội dung sau này, tất nhiên những bài viết chuyên đề sau này tất cả sẽ bằng tiếng Việt (tất nhiên sẽ có một số từ tiếng Anh chuyên ngành không thể thay thế được).

## Guidelines

```md
# PHP Teaching Guidelines

## Web Basics - [read here](https://khanhicetea.com/php-0-to-1/web-basics/)

**Objective** : To understand basically about Web (what it is and how it works)

- What is Web ?
- How internet works ? (IP Protocol)
- HTTP Protocol
- Hosting, Domain, DNS, Database, HTTPS
- Request n' Response Life Cycle

## PHP Basics

**Objective** : To understand clearly about how to write and read code in PHP, to indentify what is Input, Output and Process (where magic happens)

- Input, Ouput & Program
- Variables and data types in PHP
	- Define, unset, isset a variable
    - Scalar types : boolean, int, string, float, double, array, hash table and null
    - Simple StdObject type
    - Datetime (UNIX Timestamp, Timezone)
- Conditional (if else elseif switch)
	- Logical boolean (AND, OR, XOR, NOT)
    - IF THEN
    - IF THEN ELSE
    - IF THEN ELSE IF
    - SWITCH CASE
    - SHORT IF
- Loops
	- While loop
    - For loop
- Functions
	- Naming function
    - Returning result
    - Arguments
    - Default arguments
    - Anonymous function
	- call_user_func_array
- String Manipulation
	- string (array of characters)
    - concatenate multiple strings
    - strlen, substr, str_replace, strpos, explode, implode, strtolower, strtoupper, is_string
- Datetime manipulation
	- Today, now
	- Compare 2 dates
    - Adding time, time diff
	- Datetime formating
- File system
	- What is file, directory, path (relative and absolute) and permissions
    - fopen, fwrite, fread, fclose
    - file_get_contents, file_put_contents
    - CSV file
- HTML Basics
	- DOM structure
    - Common tags (html, head, body, h1-6, div, p, ul, li, a, img)
	- Table (table, thead, th, tbody, tr, td)
    - Form (input, button, select, option)
- Retrieve HTTP request information
	- query params ($\_GET)
    - post data ($\_POST)
- Return data content to HTTP response
	- echo, print
    - header
    - die, exit
- Final project : Make a simple website with text file database

## PHP Intermediate

**Objective** : To understand clearly about how to design a database, build a simple mvc application

- SQL fundamentals
	- What is database, table, column, row and value
    - Common data types (VARCHAR, INT, TEXT)
    - Primary key, secondary keys, foreign keys
    - ID
    - Create a database, table, column
    - Insert data
    - Select data
    	- FROM
    	- WHERE
        - ORDER BY
        - LIMIT
        - OFFSET
        - Aggregation (SUM, COUNT, AVG, MIN, MAX)
    - Update data
    - Delete data
- Simple MVC
	- What is MVC pattern ?
    - Dispatcher
    - Controller
    	- Retrieve request
        - Do some magics
        - Return response
    - Model
    - View
        - Layout block
        - Escape raw value
    - Combine them together !
- Connect database using PDO
	- Connect a database
    - Prepare query
    - Execute query with parameters
    - Disconnect
- Store user data in cookies and sessions
	- Cookies
    - Sessions
    - Local storage
- User authentication
	- Password hashing
    - Hash checking
    - Store password safely
    - Store user info inside session
	- Restrict guest
- SQL Joins
	- Inner Join
    - Left Join
    - Right Join
    - Full Join
	- N+1 query problem
- Make a blog (with admin panel) using simple MVC and MySQL

## PHP Advanced

**Objective** : To understand clearly about package manager (composer), OOP and making a website using a framework

- OOP
	- Class (properties, methods)
    - Class name convention (namespace, PSR-0)
    - Class vs Object
    - Class scope (private, protected, public)
    - Class inheritance
    - Abstract class (method) and Interface
    - instanceof
    - Meta programming (via magic methods)
- Package Manager (composer)
	- What is a package manager ?
    - Install composer
    - Basic commands in composer
    - Using autoload of composer
    - Finding packages in packagist
	- Understand semantic version
- Making web using a framework
```