import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import IntroHero from '@/components/Hero/Intro'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps({ locale }) {
  const posts = await getAllPosts({ onlyTech: true, locale: locale })

  const heros = await getAllPosts({ onlyHidden: true, locale: locale })
  const hero = heros.find((t) => t.slug === BLOG.techSection)

  let blockMap
  try {
    blockMap = await getPostBlocks(hero.id)
  } catch (err) {
    console.error(err)
    // return { props: { post: null, blockMap: null } }
  }

  return {
    props: {
      posts,
      blockMap
    },
    revalidate: 1
  }
}

const tech = ({ posts, blockMap }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <IntroHero blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default tech
