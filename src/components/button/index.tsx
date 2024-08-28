import { ReactNode, useState } from "react"
import { twMerge } from "tailwind-merge"

type ButtonType = 'Primary'|'Secondary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   styleType?:ButtonType
}

export default function Button({
    children,
    className,
    styleType = "Primary",
    ...props
}:ButtonProps){

    const [hover, setHover] = useState(false);

    let buttonTypeStyle = "px-6 py-3 font-bold rounded-xl transition-colors ";
    let buttonTypeStyleHover = "";

    if (styleType == 'Primary'){
        buttonTypeStyle += "bg-gray-800 text-white";
        buttonTypeStyleHover += "bg-gray-600";
    }else if(styleType == "Secondary"){
        buttonTypeStyle += "bg-white border-gray-300 border";
        buttonTypeStyleHover += "bg-gray-200";
    }

    return <button 
        {...props}

        className={twMerge(
            buttonTypeStyle,
            hover&&buttonTypeStyleHover,
            className
        )}

        onMouseEnter={(e)=>{
            setHover(true);
            props.onMouseEnter?.(e)
        }}
        onMouseLeave={(e)=>{
            setHover(false);
            props.onMouseLeave?.(e);
        }}
    >
        {children}
    </button>
}