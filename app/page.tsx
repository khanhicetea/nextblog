import Image from 'next/image'
import Link from 'next/link'
import { PostFiles } from '~/data/posts'

export const metadata = {
  title: 'Next Blog 1',
  description: 'KhanhIceTea Blog',
}

export default function Home() {
  return (
    <main className="container">
      <div className="w-full px-3">
        <h1>Hello</h1>
        <ul>
          {PostFiles.map((file, idx) => (
            <li key={file}>
              <Link className="text-blue-600" href={`/posts/${file}`}>{file}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main >
  )
}
