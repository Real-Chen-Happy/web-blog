export default function filterPublishedPosts({
  posts,
  onlyTech,
  onlyLife,
  onlyHidden
}) {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      onlyTech
        ? post?.type?.[0] === 'Tech'
        : post
    )
    .filter((post) =>
      onlyLife
        ? post?.type?.[0] === 'Life'
        : post
    )
    .filter((post) =>
      onlyHidden
        ? post?.type?.[0] === 'Hidden'
        : post?.type?.[0] !== 'Hidden'
    )
    .filter((post) => {
      return (
        post.title &&
        post.slug &&
        post?.status?.[0] === 'Published' &&
        post.date <= new Date()
      )
    })
}
