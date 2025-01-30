import React from 'react'
import Typed from 'typed.js'

import { Twemoji } from '@/components/ui/Twemoji'

const TypedBios = () => {
  const el = React.useRef(null)
  const typed = React.useRef<Typed | null>(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })

    return () => typed.current?.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I live in{' '}
          <b className="font-medium">
            Toronto, Canada <Twemoji emoji="flag-canada" />.
          </b>
          ...
        </li>
        <li>
          My first programming language I learned was <b className="font-medium">C</b>...
        </li>
        <li>I love web development...</li>
        <li>
          I work mostly with{' '}
          <b className="font-medium">Javascript/Typescript, Python, and Database</b> technologies...
        </li>
        <li>
          I'm a sporty-guy. I love playing soccer <Twemoji emoji="soccer-ball" />
          ...
        </li>
        <li>
          I love playing video games <Twemoji emoji="video-game" />
          ...
        </li>
      </ul>
      <span ref={el} className="text-gray-600 dark:text-neutral-200" />
    </div>
  )
}

export default TypedBios
