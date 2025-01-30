import { map } from 'lodash'
import popularTags from '@/data/popularTags'
import CustomLink from '@/components/links/Link'
import BrandIcon from '@/components/ui/BrandIcon'

const PopularTags = () => {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 py-6 md:space-y-5">
        {/* Adjusted font size for heading to be responsive */}
        <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
          Popular Tags
        </h1>
        {/* Adjusted font size for paragraph to be responsive */}
        <p className="!mt-2 text-base leading-7 text-gray-500 dark:text-gray-400 sm:text-lg">
          Popular tags feature the most widely favored topics.
        </p>
      </div>

      {/* Added responsive grid layout for different screen sizes */}
      <div className="popular-tags grid grid-cols-2 gap-1 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {map(popularTags, (popularTag) => {
          const { slug, iconType, href, title } = popularTag

          {
            /* Changed fixed width to flexible width */
          }
          const className = `${slug} flex w-full justify-center space-x-2 rounded-lg p-1`

          return (
            <CustomLink key={slug} href={href} className={className}>
              <BrandIcon type={iconType} className="h-6 w-6" />
              {/* Adjusted font size for tag titles to be responsive */}
              <div className="my-auto text-sm text-gray-500 dark:text-white sm:text-base">
                {title}
              </div>
            </CustomLink>
          )
        })}
      </div>
    </div>
  )
}

export default PopularTags
