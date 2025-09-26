import siteMetadata from '@/data/siteMetadata'

import { Twemoji } from '@/components/ui/Twemoji'

const Heading = () => {
  return (
    <h1 className="-mt-8 text-gray-600 dark:text-neutral-200">
      I'm <span>{siteMetadata.name}</span> - a dedicated{' '}
      <span>Technical Support Specialist - System Designer</span> in Canada{' '}
      <span className="hidden">Douglas Mosaka Nebongo, CAN</span>
      <span className="absolute ml-1.5 inline-flex pt-[3px]">
        <Twemoji emoji="flag-canada" size="lg" />
      </span>
      <br></br> I have a strong passion for system design, troubleshooting, Java, Databases,
      JavaScript/Typescript and web development technologies. I started this blog to practice my
      skill and share my knowledge
    </h1>
  )
}

export default Heading
