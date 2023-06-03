'use client'
import { useState } from "react"
import Button from "../Button"
import SignInModal from "../modals/SignInModal"

interface SignInProps {}

const SignUp = ({}: SignInProps) => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <>
    <Button onClick={() => setShow(true)} styleType="primary">Sign In</Button>
    <SignInModal isOpen={show} onClose={() => setShow(false)}/>
    </>
  )
}

export default SignUp