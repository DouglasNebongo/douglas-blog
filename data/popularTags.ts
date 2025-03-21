import { BrandIconType } from '@/components/ui/BrandIcon'

type PopularTag = {
  href: string
  iconType: BrandIconType
  slug: string
  title: string
}

const popularTags: PopularTag[] = [
  {
    href: '/',
    iconType: 'Javascript',
    slug: 'javascript',
    title: 'Javascript',
  },
  {
    href: '/',
    iconType: 'Typescript',
    slug: 'typescript',
    title: 'Typescript',
  },
  {
    href: '/',
    iconType: 'NestJS',
    slug: 'nestjs',
    title: 'NestJS',
  },
  {
    href: '/',
    iconType: 'React',
    slug: 'react',
    title: 'React',
  },
  {
    href: '/',
    iconType: 'Mongodb',
    slug: 'database',
    title: 'Database',
  },
  {
    href: '/',
    iconType: 'Docker',
    slug: 'devops',
    title: 'Devops',
  },
]

export default popularTags
