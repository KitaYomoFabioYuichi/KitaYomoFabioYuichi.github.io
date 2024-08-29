import ButtonPanel from './button-panel'
import TitleImage from './title-image'

export default function Title(){
    return <section className={`min-h-screen flex flex-col justify-center items-center lg:items-stretch`}>
        <div className='flex justify-around items-center'>
            <div className='flex flex-col gap-8 justify-center'>
                <TitleText/>
                <ButtonPanel/>
            </div>
            <TitleImage/>
        </div>
    </section>
}

function TitleText(){
    return <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-2xl text-gray-500'>Hello, </h1>
            <h1 className='text-5xl sm:text-6xl font-bold'>I'm Fabio Kita</h1>
            <h1 className='text-2xl text-right text-gray-500'>I'm a <b>Software Engineer</b></h1>
        </div>
    </div>
}