import Link from "next/link"
import { RiEditBoxLine } from 'react-icons/ri'

interface WriteButtonProps {}

const WriteButton = ({

}: WriteButtonProps) => {
  return (
    <Link href={"/write"} className='flex flex-row items-center text-accent-500 bg-accent-500/5 hover:bg-accent-500/10 px-[16px] py-[8px] rounded-full transition-all duration-300 ease-in-out gap-[5px]'>
      <RiEditBoxLine/>
      <span>Write</span>
    </Link>
  )
}

export default WriteButton