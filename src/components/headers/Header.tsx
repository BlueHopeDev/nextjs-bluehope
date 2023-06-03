import React from "react"
import Brand from "./Brand"
import Search from "./Search"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import Menu from "./Menu"
import WriteButton from "./WriteButton"

interface HeaderProps {}

const Header = ({

}: HeaderProps) => {

  return (
    <header className="fixed top-0 left-0 right-0 h-[64px] flex justify-center items-center">
      <nav className="w-full h-full max-w-screen-xl px-[20px] flex items-center">
        <div className="flex justify-center items-center h-100 min-w-[32px] w-[32px]">
          <Brand/>
        </div>
        <div className="flex justify-center items-center h-100">
          <Search/>
        </div>
        <div className="w-full m-[10px]">
          <Menu/>
        </div>
        <div className="pr-[10px]">
          <WriteButton/>
        </div>
        <div className="flex flex-row items-center justify-center gap-[10px] pl-[10px]">
          <SignIn/>
          <SignUp/>
        </div>
      </nav>
    </header>
  )
}

export default Header