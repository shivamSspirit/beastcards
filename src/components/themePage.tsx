import Card from './card'

function ThemePage() {
    return (
        <div>
            <div className="bg-[#0e142d]">
                <div className='ml-20 pt-8 flex flex-row gap-3'>
                    <span><img className='align-middle items-center' src='/img/activity.png' /></span>
                    <h3 className='leading-none'>Trending Assests</h3>
                </div>
                <div className='mt-12'>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default ThemePage
