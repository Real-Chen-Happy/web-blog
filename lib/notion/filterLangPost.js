export default function filterLangPosts({
  posts,
  locale,
}) {
  if (!posts || !posts.length) return []
  return posts
    .filter((post) =>
      post?.lang?.[0] === locale
    )
}
