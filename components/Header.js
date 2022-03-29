import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div>
      <div className="flex max-w-6xl justify-between">
        {/* Left  */}
        <div className="relative hidden h-24 w-24 cursor-pointer lg:inline-grid">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative h-10 w-10 flex-shrink-0 cursor-pointer lg:hidden">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle  */}

        {/* Right  */}
      </div>
    </div>
  )
}

export default Header
