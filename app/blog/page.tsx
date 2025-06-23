import { client } from '@/lib/sanity.client'
import BlogList from '@/components/BlogList'
import { Post } from '@/types'

async function getPosts(): Promise<Post[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`
  
  return client.fetch(query)
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <section className="pt-32 pb-20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            GymRNK Blog
          </h1>
          <p className="text-xl text-gym-gray-600 max-w-2xl mx-auto">
            Tips, workouts, and insights to help you climb the rankings
          </p>
        </div>
        
        <BlogList posts={posts} />
      </div>
    </section>
  )
}