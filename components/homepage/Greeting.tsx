import clsx from 'clsx'

const Greeting = () => {
  const className = clsx(
    'text-gray-600 dark:text-gray-100', // Normal text color for light and dark modes
    'mb-4 text-xl font-normal leading-normal tracking-tight', // Normal font size and weight
    '-mt-24 md:-mt-16' // No negative margin on mobile, -mt-16 on medium screens and up
  )

  return (
    <div className={className}>
      I hope your world's going well. I'll bet you're cool. Welcome to my home on the web.
    </div>
  )
}

export default Greeting
