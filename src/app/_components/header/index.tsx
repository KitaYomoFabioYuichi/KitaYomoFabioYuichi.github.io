import NavLabel from "./nav-label"

export default function Header(){
    return <header className="fixed top-0 w-full h-20 z-30 bg-white border-gray-300 border-b px-10 flex flex-row items-center">
        <h1 className="text-2xl tracking-wider font-extrabold cursor-pointer">Fabio Kita</h1>
        <div className="flex-1 flex flex-row justify-end items-center gap-20">
            <NavLabel selected={true}>Home</NavLabel>
            <NavLabel>About</NavLabel>
            <NavLabel>Skills</NavLabel>
            <NavLabel>Works</NavLabel>
            <NavLabel>Contact</NavLabel>
        </div>
    </header>
}