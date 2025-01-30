import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs, allSnippets } from 'contentlayer/generated'
import { Main } from '@/components/main/Main'

const MAX_POSTS_DISPLAY = 3
const MAX_SNIPPETS_DISPLAY = 3

export default async function Page() {
  return (
    <Main
      posts={allCoreContent(sortPosts(allBlogs)).slice(0, MAX_POSTS_DISPLAY)}
      snippets={allCoreContent(sortPosts(allSnippets)).slice(0, MAX_SNIPPETS_DISPLAY)}
    />
  )
}
