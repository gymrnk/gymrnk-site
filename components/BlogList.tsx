import Link from 'next/link'
import { format } from 'date-fns'
import { urlForImage } from '@/lib/sanity.image'
import { Post } from '@/types'

export default function BlogList({ posts }: { posts: Post[] }) {
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gym-gray-600">No blog posts yet. Check back soon!</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <article key={post._id} className="group">
          <Link href={`/blog/${post.slug.current}`}>
            <div className="relative aspect-[16/9] mb-4 overflow-hidden rounded-xl bg-gym-gray-100">
              {post.mainImage ? (
                <img
                  src={urlForImage(post.mainImage).width(800).height(450).url()}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gym-gray-400">
                  No image
                </div>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-2 group-hover:text-gym-blue transition-colors">
              {post.title}
            </h2>
            <p className="text-gym-gray-600 mb-2 line-clamp-2">
              {post.excerpt}
            </p>
            <time className="text-sm text-gym-gray-500">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          </Link>
        </article>
      ))}
    </div>
  )
}
