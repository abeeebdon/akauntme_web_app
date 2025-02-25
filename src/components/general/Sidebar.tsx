import { LogoIcon, LogoutIcon } from '../icons'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { Tooltip } from '../basics'
import { links } from './data/data'
import { usePathname } from 'next/navigation'

interface Props {
  isExpanded: boolean
  toggleSidebar: () => void
}
const Sidebar = ({ isExpanded, toggleSidebar }: Props) => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <aside
      className={`relative flex h-screen ${
        isExpanded ? 'w-[14%]' : 'w-[5%]'
      } hidden lg:block transition-width duration-300 bg-akauntme`}
    >
      <div className="flex flex-col justify-between h-full ">
        <article>
          <div className="border-b border-white/20 shadow-sm py-3 text-center flex items-center justify-center h-[10vh]">
            <h1
              className={`text-white flex items-center gap-x-2 font-bold text-xl ${
                isExpanded ? 'block' : 'hidden'
              } text-center`}
            >
              <LogoIcon type="alone" className="size-6 fill-white" /> Akauntme
            </h1>
            <h1
              className={`text-white font-bold text-xl ${
                isExpanded ? 'hidden' : 'block'
              } text-center flex justify-center`}
            >
              <LogoIcon type="alone" className="size-6 fill-white" />
            </h1>
          </div>

          <ul className="mt-8 flex flex-col h-[70vh] p-2 justify-around">
            {links.map((e, index) => {
              return (
                <motion.li
                  className={`text-white text-lg  py-2  ${
                    pathname == e.link &&
                    isExpanded &&
                    'bg-white text-[#007AFF]'
                  }`}
                  key={index}
                  whileHover={{
                    scale: 0.95,
                  }}
                  whileTap={{
                    scale: 1,
                  }}
                >
                  <Link
                    href={e.link}
                    className={`flex items-center rounded-md gap-x-2  ${
                      !isExpanded && 'justify-center'
                    } `}
                  >
                    {isExpanded ? (
                      <div
                        className={`hidden lg:block bg-transparent hover:bg-white rounded-md  hover:text-akauntme p-1   ${
                          pathname == e.link ? 'text-akauntme' : 'text-white'
                        }`}
                      >
                        {e.icon}
                      </div>
                    ) : (
                      <Tooltip
                        text={`${e.title}`}
                        bg="akauntme"
                        className={`rounded-md *:hover:bg-white *:hover:text-akauntme"${
                          pathname == e.link ? 'text-akauntme' : 'text-white'
                        }`}
                        position=""
                      >
                        <div className="bg-transparent hover:bg-white rounded-md text-white hover:text-akauntme p-1">
                          {e.icon}
                        </div>
                      </Tooltip>
                    )}

                    <div
                      className={` ${
                        isExpanded ? 'block' : 'hidden'
                      } text-sm sm:text-base font-semibold p-1 rounded-md`}
                    >
                      {e.name}
                    </div>
                  </Link>
                </motion.li>
              )
            })}
          </ul>

          {/* Log out component  */}
          <div className="mt-16">
            <motion.div
              className="text-white text-lg flex gap-x-1 items-center"
              whileHover={{
                scale: 0.95,
              }}
              whileTap={{
                scale: 1,
              }}
            >
              <Link
                href="#"
                className={`flex items-center gap-x-[-10px] ${
                  isExpanded ? '' : 'justify-center'
                } *:hover:bg-white *:hover:text-akauntme `}
              >
                <div className="bg-transparent hover:bg-white rounded-md text-white hover:text-akauntme p-2">
                  <LogoutIcon className="size-5 fill-current" type="desktop" />
                </div>
                <div
                  className={` ${
                    isExpanded ? 'block' : 'hidden'
                  } text-base font-semibold p-1 rounded-md`}
                >
                  Logout
                </div>
              </Link>
            </motion.div>
          </div>
        </article>

        {/* Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="text-white self-end bg-gray-700 p-2 rounded-full 
                focus:outline-none absolute -right-3"
        >
          {isExpanded ? (
            <svg
              className="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                d="M21.470703 8.9863281 A 1.50015 1.50015 0 0 0 20.439453 9.4394531L6.4394531 23.439453 A 1.50015 1.50015 0 0 0 6.4394531 25.560547L20.439453 39.560547 A 1.50015 1.50015 0 1 0 22.560547 37.439453L11.121094 26L40.5 26 A 1.50015 1.50015 0 1 0 40.5 23L11.121094 23L22.560547 11.560547 A 1.50015 1.50015 0 0 0 21.470703 8.9863281 z"
                fill="#ECE8E8"
              />
            </svg>
          ) : (
            <svg
              className="size-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                d="M26.484375 8.984375 A 1.50015 1.50015 0 0 0 25.439453 11.560547L36.878906 23L7.5 23 A 1.50015 1.50015 0 1 0 7.5 26L36.878906 26L25.439453 37.439453 A 1.50015 1.50015 0 1 0 27.560547 39.560547L41.560547 25.560547 A 1.50015 1.50015 0 0 0 41.560547 23.439453L27.560547 9.4394531 A 1.50015 1.50015 0 0 0 26.484375 8.984375 z"
                fill="#ECE8E8"
              />
            </svg>
          )}
        </button>
        {/* Toggle Button */}
      </div>
    </aside>
  )
}

export default Sidebar
