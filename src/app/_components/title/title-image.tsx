import Image from "next/image";

export default function TitleImage(){
    return <div className="hidden lg:block">
        <Image alt="Image" src={"/title-image.png"} width={320} height={320}/>
    </div>
}