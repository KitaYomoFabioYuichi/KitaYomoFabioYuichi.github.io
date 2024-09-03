import { HTMLAttributes } from "react";
import EnterDiv from "../animation/enter-div";

export default function SectionSubTitle({
    children,
    className
}:HTMLAttributes<HTMLDivElement>){
    return <EnterDiv className={className} from={{x:-100, y:0}}>
        <h2 className="text-gray-500 text-lg">
            {children}
        </h2>
    </EnterDiv>
}