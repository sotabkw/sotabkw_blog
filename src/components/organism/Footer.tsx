import { Button } from '@components/uiParts/Button'
import { GitHub, Twitter, User } from 'react-feather'

export const Footer = () => {
  return (
    <>
      <footer className="border-t border-slate-200 dark:border-slate-500 dark:bg-slate-900 dark:bg-gradient-to-r from-slate-900 to-slate-700">
        <div
          className="flex px-4 m-auto py-5  dark:text-gray-50 text-sm flex-col
      md:flex-row 2xl:max-w-[70%]"
        >
          <div className="mt-2 text-slate-500">
            ©2022 Sota Watanabe. All Rights Reserved.
          </div>
          <div className="md:flex-auto md:flex-row-reverse mt-3 flex-row flex">
            <Button
              as="a"
              href="https://twitter.com/sota_bkw"
              className="w-4 mx-2"
            >
              <Twitter
                className="cursor-pointer w-4 h-5  text-slate-500  hover:text-blue-400"
                aria-hidden="true"
              />
            </Button>
            <Button
              as="a"
              href="https://github.com/sotabkw"
              className="w-4 mx-2"
            >
              <GitHub
                className="cursor-pointer w-4 h-5  text-slate-500  hover:text-blue-400"
                aria-hidden="true"
              />
            </Button>
            <Button
              as="a"
              href="https://sotabkw.github.io/"
              className="w-4 mx-2"
            >
              <User
                className="cursor-pointer w-4 h-5  text-slate-500  hover:text-blue-400"
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </footer>
    </>
  )
}
