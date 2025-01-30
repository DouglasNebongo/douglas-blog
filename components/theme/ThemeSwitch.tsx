import { Switch } from '@headlessui/react'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

function useDarkTheme(): [boolean, boolean, (theme: string) => void] {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Avoid Hydration Mismatch
  useEffect(() => setMounted(true), [])

  const isDark = mounted && resolvedTheme === 'dark'
  return [isDark, mounted, setTheme]
}

const ThemeSwitch = () => {
  const [isDark, mounted, setTheme] = useDarkTheme()
  return (
    <div className="flex h-6 w-12 items-center">
      {mounted && (
        <Switch
          checked={isDark}
          title="Theme switch"
          onChange={() => setTheme(isDark ? 'light' : 'dark')}
          className={`${isDark ? 'bg-gray-700' : 'bg-gray-300'}
          relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`${
              isDark ? 'translate-x-6' : 'translate-x-0'
            } absolute h-6 w-6 border-2 border-transparent text-gray-900 transition duration-200 ease-in-out dark:text-gray-100`}
          >
            {isDark ? (
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            ) : (
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            )}
          </svg>
          <span
            aria-hidden="true"
            className={`${
              isDark ? 'translate-x-0 ' : 'translate-x-6'
            } pointer-events-none inline-block h-6 w-6 transform rounded-full bg-gray-100 shadow-lg ring-0 transition duration-200 ease-in-out  `}
          ></span>
        </Switch>
      )}
    </div>
  )
}

export default ThemeSwitch
