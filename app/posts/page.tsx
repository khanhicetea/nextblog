import Image from 'next/image'
import { useParams } from 'next/navigation';

export const metadata = {
  title: 'Blog Post 1',
  description: 'KhanhIceTea Blog',
}

export default function Posts() {
  const params = useParams();
  const { slug } = params

  return (
    <main className="container">
      <div className="w-full px-3">
        <h1>Hello {slug}</h1>
      </div>
    </main>
  )
}
