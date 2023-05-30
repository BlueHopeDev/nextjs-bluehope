import { ButtonHTMLAttributes } from "react"
import { IconType } from "react-icons"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType,
  styleType?: 'primary' | 'secondary',
}

const Button: React.FC<ButtonProps> = ({ children, icon: Icon, styleType, ...props }) => {
  return (
    <button className={`flex flex-row items-center gap-[5px] w-full justify-center rounded-sm transition-all duration-300 ease-in-out select-none whitespace-nowrap
                      ${styleType === 'secondary' ? "bg-transparent border-[2px] border-dark-500 hover:border-dark-500/90 hover:bg-dark-500/5 px-[10px] py-[6px]" :
                                                    "bg-dark-500 text-light-500 hover:bg-dark-500/90 px-[12px] py-[8px]"}`} {...props}>
      { Icon !== undefined && (
        <Icon className={`${styleType === 'secondary' ? "text-dark-500" : "text-light-500"}`}/>
      )}
      {children}
    </button>
  )
}

export default Button