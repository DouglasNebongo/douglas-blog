import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import { Image } from '@/components/image/Image'
import { Twemoji } from '@/components/ui/Twemoji'
import CareerTimeline from '@/components/about/CareerTimeline'
import CustomLink from '@/components/links/Link'
import Button from '@/components/ui/Button'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, bluesky, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h2>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full object-cover "
                style={{ objectPosition: 'center 10%' }}
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight text-gray-500 dark:text-gray-400">
              {name}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="-mt-2 mb-4 flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
          </div>

          <div className="dark:prose-dark-700 prose max-w-none pb-8 xl:col-span-2">
            <h2 className="mt-2 text-gray-500 dark:text-gray-200">
              Hey techies! <Twemoji className="mx-2" emoji="waving-hand" />
              I'm Douglas Nebongo—call me Doug if you like to keep it chill. 👨‍💻✨
            </h2>
            <p className="text-gray-500 dark:text-gray-200">
              I'm passionate about crafting exceptional web apps with JavaScript/TypeScript. My
              go-to tools include Reactjs, Node.js, Next.js, tailwindcss and occasionally
              Python(Django) to keep things versatile. Let’s build something cool together!
            </p>
            <h2 className="text-gray-500 dark:text-gray-200">The 'Why' of This Blog</h2>
            <blockquote className="text-gray-500 dark:text-gray-400">
              <p>Build to learn, learn to build.</p>
            </blockquote>
            <p className="text-gray-500 dark:text-gray-200">
              I’m a firm believer that the best way to master something is to roll up your sleeves
              and create. This blog started as my playground for applying new skills to real-world
              projects, but it quickly evolved into a space to share the lessons, challenges, and
              wins from my journey as a software engineer.
            </p>
            <p className="text-gray-500 dark:text-gray-200">
              I hope this blog becomes a go-to resource for practical insights and inspiration.
              After all, sharing is how we grow together.
            </p>
            <p className="text-gray-500 dark:text-gray-200">
              I’d love to hear your thoughts—let’s geek out and build something amazing!{' '}
              <Twemoji emoji="clinking-beer-mugs" />
            </p>
            <div className="flex items-center justify-between text-gray-500 dark:text-gray-200">
              <h2 className="text-gray-500 dark:text-gray-200">My Career</h2>

              <Button className="mt-6" as="a" href="/static/resume.pdf" target="_blank">
                <span>Resume</span>
                <Twemoji emoji="page-facing-up" />
              </Button>
            </div>
            <CareerTimeline />
            <h2 className="text-gray-500 dark:text-gray-200">Tech stack</h2>
            <p className="text-gray-500 dark:text-gray-200">
              This blog is built with{' '}
              <a target="_blank" href="https://nextjs.org/">
                Next.js
              </a>{' '}
              and{' '}
              <a target="_blank" href="https://tailwindcss.com/">
                Tailwind CSS
              </a>{' '}
            </p>
            <p className="text-gray-500 dark:text-gray-200">
              See my{' '}
              <a target="_blank" href="https://github.com/DouglasNebongo/douglas-blog.git">
                repository
              </a>{' '}
              for this blog.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
