import { twMerge } from "tailwind-merge";

export function cn(...styles:any){
    return twMerge(styles);
}