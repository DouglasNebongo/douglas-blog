'use client'

import { useState } from 'react'
import type { Blog, Snippet } from '.contentlayer/generated'
import { PostCardListView } from '@/components/blog/post-card-list-view'
import { SnippetCard } from '@/components/cards/snippet'
import { GrowingUnderline } from '@/components/ui/growing-underline'
import CustomLink from '@/components/links/Link'
import type { CoreContent } from '@/lib/types/common'

const MAX_DISPLAY = 2

export function LatestPosts({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  const [view, setView] = useState<'posts' | 'snippets'>('posts')
  return (
    <div className="space-y-4 divide-y divide-gray-200 dark:divide-gray-700 md:mt-8 md:space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          <button onClick={() => setView('posts')}>
            <span className="mr-2 md:mr-3">
              <GrowingUnderline> Recent Posts</GrowingUnderline>
            </span>
          </button>
        </div>
        <div className="flex items-center justify-end text-base font-medium leading-6">
          <CustomLink
            href={view === 'posts' ? '/blog' : '/snippets'}
            className=""
            aria-label="All posts"
          >
            <GrowingUnderline data-umami-event="all-posts">
              <span className="hidden md:inline-block">View all {view}</span>
              <span className="md:hidden">More</span> &rarr;
            </GrowingUnderline>
          </CustomLink>
        </div>
      </div>
      {view === 'posts' ? (
        <ul className="space-y-12 divide-gray-200 pt-6 dark:divide-gray-700 md:space-y-20 md:pt-10">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post, idx) => (
            <li key={post.slug}>
              <PostCardListView post={post} loading={idx === 0 ? 'eager' : 'lazy'} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="py-10">
          <div className="grid-cols-2 gap-x-6 gap-y-10 space-y-10 md:grid md:space-y-0">
            {!snippets.length && 'No snippets found.'}
            {snippets.map((snippet) => (
              <SnippetCard snippet={snippet} key={snippet.path} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
