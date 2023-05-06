import remarkGfm from 'remark-gfm';
import rehypePrism from 'rehype-prism-plus';
import { compileMDX } from "next-mdx-remote/rsc";
import Image from "next/image";

type BaseProps = React.HTMLAttributes<any>
type ImgProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

const components = {
    a: (props: BaseProps) => <a className="text-blue-500 hover:text-blue-900 hover:underline hover:underline-offset-4" {...props}></a>,
    h1: (props: BaseProps) => <h1 className="my-7 text-3xl font-bold" {...props}></h1>,
    h2: (props: BaseProps) => <h2 className="my-6 text-2xl font-semibold" {...props}></h2>,
    h3: (props: BaseProps) => <h3 className="my-5 text-xl font-semibold" {...props}></h3>,
    h4: (props: BaseProps) => <h4 className="my-4 text-lg font-medium" {...props}></h4>,
    h5: (props: BaseProps) => <h5 className="my-3 text-base font-medium" {...props}></h5>,
    p: (props: BaseProps) => <p className="my-3 text-base text-justify leading-6" {...props}></p>,
    ul: (props: BaseProps) => <ul className="pl-7 text-base list-disc leading-6" {...props}></ul>,
    li: (props: BaseProps) => <li className="my-2" {...props}></li>,
    img: (props: ImgProps) => <Image width={1080 as any} height={1080 as any} alt={props.alt!} {...props}></Image>,
}

export default async function parseMDX(rawContent: string) {
    return await compileMDX<{ title: string, cover?: string }>({
        source: rawContent,
        options: {
            parseFrontmatter: true, mdxOptions: {
                remarkPlugins: [[remarkGfm]],
                rehypePlugins: [[rehypePrism, { ignoreMissing: true, showLineNumbers: false }]]
            }
        },
        components,
    })
}