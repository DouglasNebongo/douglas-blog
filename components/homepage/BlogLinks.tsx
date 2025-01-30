import CustomLink from '@/components/links/Link'
import { Twemoji } from '@/components/ui/Twemoji'
import { GrowingUnderline } from '@/components/ui/growing-underline'

const LINKS = [
  {
    title: `What have I built?`,
    href: `/projects`,
    emoji: 'man-technologist',
    event: 'home-link-projects',
  },
  {
    title: `My writings`,
    href: `/blog`,
    emoji: 'memo',
    event: 'home-link-blog',
  },
  {
    title: `About me & this blog`,
    href: `/about`,
    emoji: 'smiling-face-with-sunglasses',
    event: 'home-link-about',
  },
  {
    title: `My career`,
    href: `/about`,
    emoji: 'briefcase',
    event: 'home-link-about',
  },
  {
    title: `Get in touch`,
    href: `mailto:mnebongo@gmail.com`,
    emoji: 'email',
    event: 'home-link-contact',
  },
]

export default function BlogLinks() {
  return (
    <div className="flex flex-col gap-2.5 py-2 md:gap-3">
      {LINKS.map(({ title, href, emoji, event }) => (
        <CustomLink key={title} href={href} className="flex items-center gap-1.5">
          <Twemoji emoji={emoji} />
          <GrowingUnderline data-umami-event={event} className="leading-6">
            {title}
          </GrowingUnderline>
        </CustomLink>
      ))}
    </div>
  )
}
