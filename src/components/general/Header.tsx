import { useState } from 'react'
import { FaBell, FaSearch } from 'react-icons/fa'
const Header = () => {
  const [inputActive, setInputActive] = useState(false)
  return (
    <header className="h-[10vh] bg-white border-b flex justify-around items-center">
      <div className="bg-[#75767433] px-4 py-2 rounded-xl">
        <button>Ask A.I</button>
      </div>
      <article
        className="flex w-full max-w-[500px] bg-[#75767433] items-center gap-3 justify-center rounded-xl"
        onClick={() => setInputActive(true)}
        onMouseLeave={() => setInputActive(false)}
      >
        <FaSearch className={`${inputActive ? 'hidden' : 'block'}`} />
        <input
          type="text"
          className={`bg-transparent border-none outline-none ${
            !inputActive ? 'w-[70%]' : 'w-full'
          }`}
          placeholder="Search your sales, receipt and more..."
        />
      </article>

      <div className="flex items-center gap-4">
        <FaBell size={24} />
        <FaBell size={24} />
      </div>
    </header>
  )
}

export default Header
