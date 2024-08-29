import { cn } from "@/utility"

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

    let buttonTypeStyle;

    if (styleType == 'Primary'){
        buttonTypeStyle = "bg-gray-800 text-white lg:hover:bg-gray-600 active:bg-gray-600";
    }else if(styleType == "Secondary"){
        buttonTypeStyle = "bg-white border-gray-300 border lg:hover:bg-gray-200 active:bg-gray-200";
    }

    return <button 
        {...props}

        className={cn(
            "px-6 py-3 font-bold rounded-xl transition-colors duration-100 ",
            buttonTypeStyle,
            className
        )}
    >
        {children}
    </button>
}