'use client'

import { Twemoji } from '@/components/ui/Twemoji'
import type { Blog, Snippet } from '.contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import Hero from '@/components/homepage/Hero'
import { PageSEO } from '@/components/seo/SEO'
import { Container } from '@/components/ui/container'
import { ProfileCard } from '@/components/cards/profile'
import { LatestPosts } from '@/components/latest-posts/latest-posts'
import type { CoreContent } from '@/lib/types/common'
import Snowfall from 'react-snowfall'
import { Avatar, Heading, Greeting, TypedBios, BlogLinks, PopularTags } from '@/components/homepage'

type Person = {
  name: string
  occupation: string
}
const myInfo: Person = {
  name: 'Douglas Nebongo',
  occupation: 'Software Engineer',
}

export function Main({
  posts,
  snippets,
}: {
  posts: CoreContent<Blog>[]
  snippets: CoreContent<Snippet>[]
}) {
  return (
    <Container as="div" className="pt-4 lg:pt-12">
      <div className="py-0 md:pb-8 xl:grid xl:grid-cols-3">
        {/* Hero and Avatar/ProfileCard Layout */}
        <div className="-mt-12 flex-col space-y-4 md:space-y-6 md:pr-8 xl:col-span-2">
          <Hero />
          <Snowfall
            snowflakeCount={60}
            style={{ zIndex: -1, width: '100vw', height: '100vh', position: 'fixed' }}
          />
          <div className="-mt-12">
            <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
            <div className="text-base leading-7 text-gray-600 dark:text-gray-400 md:text-lg md:leading-8">
              {/* Introduce myself */}
              <div className="mt-8 dark:divide-gray-700 md:mt-8">
                <Greeting />
                {/* Mobile: Avatar below Hero */}
                <div className="-mt-8 block flex flex-col items-center space-x-2 pt-8 sm:-mt-12 md:hidden">
                  <Avatar />
                  <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">
                    {myInfo.name}
                  </h3>
                  {/* <div className="text-gray-500 dark:text-gray-400">{myInfo.occupation}</div> */}
                  <div className="flex space-x-3 pt-6"></div>
                </div>
                <div className="flex flex-col justify-between md:my-4 md:pb-8 xl:flex-row">
                  <div className="my-auto flex flex-col py-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
                    <Heading />
                    <TypedBios />
                    <BlogLinks />
                    <p className="flex items-center gap-2 py-3">
                      <span className="mr-2">Happy reading</span>
                      <Twemoji emoji="clinking-beer-mugs" />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop: ProfileCard on the right */}
        <div className="hidden pl-1 pt-1 xl:block">
          <ProfileCard />
        </div>
      </div>
      <PopularTags />
      <LatestPosts posts={posts} snippets={snippets} />
    </Container>
  )
}
