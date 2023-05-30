'use client'
import { useState } from "react"
import Button from "../Button"
import SignUpModal from "../modals/SignUpModal"

interface SignUpProps {}

const SignUp = ({}: SignUpProps) => {

  const [show, setShow] = useState<boolean>(false)

  return (
    <>
    <Button onClick={() => setShow(true)} styleType="secondary">Sign Up</Button>
    <SignUpModal isOpen={show} onClose={() => setShow(false)}/>
    </>
  )
}

export default SignUp