import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'


export default function search({ tags, posts }) {
  return <SearchLayout tags={tags} posts={posts} />
}
export async function getStaticProps({ locale }) {
  const posts = await getAllPosts({ locale: locale })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}
