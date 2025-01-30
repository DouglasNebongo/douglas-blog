import siteMetadata from '@/data/siteMetadata'
import CustomLink from '@/components/links/Link'
import PageTitle from '@/components/pagetitle/PageTitle'
import clsx from 'clsx'
import { Twemoji } from '@/components/ui/Twemoji'

export default function Hero() {
  return (
    <div>
      <div className="h-content sm:h-content-sm -mt-16 flex w-full flex-col justify-around text-center md:mt-0 md:text-left">
        <h4 className="text-shadow my-20 select-none text-5xl font-bold leading-tight tracking-wider sm:my-10 sm:text-7xl">
          <span
            data-content="Hi,"
            className="relative ml-[-0.5rem] inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-left before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
          >
            <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
              Hi,
            </span>
          </span>
          <span
            data-content="there!."
            className="relative inline-block before:absolute before:bottom-0 before:left-0 before:top-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-left before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
          >
            <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
              there!.
            </span>
          </span>
        </h4>
      </div>
    </div>
  )
}
