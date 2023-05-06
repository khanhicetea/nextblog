import { ReadContentBySlug } from '~/data/posts';
import React from 'react';
import parseMDX from '~/app/mdx';
import Image from 'next/image';

export const metadata = {
  title: 'Blog Post 1',
  description: 'KhanhIceTea Blog',
}

type SlugParamsProps = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: SlugParamsProps) {
  const { slug } = params
  const rawContent = ReadContentBySlug(slug);

  const { content, frontmatter } = await parseMDX(rawContent)

  metadata.title = frontmatter.title
  console.log(frontmatter.cover)

  return (
    <main className="container px-8 mx-auto xl:px-5 max-w-screen-xl py-5 lg:py-8">
      <div className="w-full px-3">
        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8 !pt-0">
          <div className="mx-auto max-w-screen-md ">
            <div className="flex justify-center">
              <div className="flex gap-3">
                <a href="/category/technology">
                  <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">Technology</span>
                </a>
              </div>
            </div>
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">{frontmatter.title}</h1>
            <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 flex-shrink-0">
                  <a href="/author/mario-sanchez">
                    <Image src={`/images/notion-style-avatar.png`} width={80} height={80} alt="Author Avatar" />
                  </a>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-400">
                    <a href="/author/mario-sanchez">KhanhIceTea</a>
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <time className="text-gray-500 dark:text-gray-400" datetime="2022-10-21T15:48:00.000Z">October 21, 2022</time>
                    <span>· 8 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          frontmatter.cover ? <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
            <Image src={frontmatter.cover} alt={frontmatter.title} fill quality={95} />
          </div> : ''
        }

        <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
          <article className="mx-auto max-w-screen-md ">
            <div className="prose mx-auto my-3 dark:prose-invert prose-a:text-blue-600">
              {content}
            </div>
            <div className="mb-7 mt-7 flex justify-center">
              <a className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 " href="/">← View all posts</a>
            </div>
            <div className="mt-3 rounded-2xl bg-gray-50 px-8 py-8 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
              <div className="flex flex-wrap items-start sm:flex-nowrap sm:space-x-6">
                <div className="relative mt-1 h-24 w-24 flex-shrink-0 ">
                  <a href="/author/mario-sanchez">
                    IMG
                  </a>
                </div>
                <div>
                  <div className="mb-3">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">About Mario Sanchez</h3>
                  </div>
                  <div>
                    <p>Mario is a Staff Engineer specialising in Frontend at <a href="https://vercel.com/" rel="noopener" target="_blank">Vercel</a>, as well as being a co-founder of Acme and the content management system Sanity. Prior to this, he was a Senior Engineer at Apple. </p>
                  </div>
                  <div className="mt-3">
                    <a className="bg-brand-secondary/20 rounded-full py-2 text-sm text-blue-600 dark:text-blue-500 " href="/author/mario-sanchez">View Profile</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
