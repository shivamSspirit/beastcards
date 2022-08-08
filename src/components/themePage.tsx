import Card from './card'

function ThemePage() {
    return (
        <div className='w-screen h-screen bg-[#0e142d] overflow-scroll'>
            <div className='ml-20 pt-8 flex flex-row gap-3'>
                <span><img className='align-middle items-center' src='/img/activity.png' /></span>
                <h3 className='leading-none fontss text-[16px]'>Trending Assests</h3>
            </div>
            <div className='mt-12 h-full'>
                <Card />
            </div>
        </div>
    )
}

export default ThemePage
