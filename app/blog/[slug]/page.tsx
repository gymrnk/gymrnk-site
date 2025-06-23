import { client } from '@/lib/sanity.client'
import { urlForImage } from '@/lib/sanity.image'
import { format } from 'date-fns'
import { PortableText } from '@portabletext/react'
import { Post } from '@/types'

async function getPost(slug: string): Promise<Post> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt,
    body
  }`
  
  return client.fetch(query, { slug })
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  
  return {
    title: `${post.title} | GymRNK Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlForImage(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <article className="pt-32 pb-20">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <time className="text-gym-gray-500">
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </time>
          </header>
          
          {post.mainImage && (
            <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-2xl">
              <img
                src={urlForImage(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
          )}
          
          <div className="prose prose-lg max-w-none">
            <PortableText value={post.body} />
          </div>
        </div>
      </div>
    </article>
  )
}