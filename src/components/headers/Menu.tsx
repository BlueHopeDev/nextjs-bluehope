import Link from "next/link"

interface MenuProps {}

const Menu = ({}: MenuProps) => {
  return (
    <ul className="menu-container float-right mr-[20px]">
      <li>
        <Link href={"/"} className="menu-item-container group">
          <h6 className="">Home</h6>
        </Link>
      </li>
      <li>
        <Link href={"/"} className="menu-item-container group">
          <h6 className="">Blog</h6>
        </Link>
      </li>
      <li>
        <Link href={"/"} className="menu-item-container group">
          <h6 className="">About</h6>
        </Link>
      </li>
    </ul>
  )
}

export default Menu