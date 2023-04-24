import Link from 'next/link'
import React from 'react'

function ButtonHome() {
  return (
    <Link href="/">
      <span className="text-white font-extrabold text-base">
        Casarão Pedra Branca
      </span>
    </Link>
  )
}

export default ButtonHome
