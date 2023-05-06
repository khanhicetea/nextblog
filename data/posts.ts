import { readFileSync, existsSync } from "fs";
import { globSync } from "glob";

const postFiles = globSync(["*.mdx", "*.md"], {
    cwd: "./data/posts",
}).map((path) => path.replace(/\.mdx?$/, ""))

const readFile = (slug: string) => {
    const mdPath = `./data/posts/${slug}.md`
    const mdxPath = `./data/posts/${slug}.mdx`
    const path = existsSync(mdxPath) ? mdxPath : mdPath

    return readFileSync(path, { encoding: 'utf-8' })
}

console.log(postFiles)

export const PostFiles = postFiles
export const ReadContentBySlug = readFile