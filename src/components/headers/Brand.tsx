import React from "react"
import Image from "next/image"
import BrandDark from "@/assets/brand/bluehope-ico.svg"

interface BrandProps {}

const Brand = ({}: BrandProps) => {
  return (
    <Image
      className="pointer-events-none select-none"
      src={BrandDark}
      alt="BLUEHOPE"
      style={{
        objectFit: 'contain'
      }}
    />
  )
}

export default Brand