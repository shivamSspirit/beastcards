import { useState } from "react"
import { cardData } from "../constant"

interface NftData {
    id: number;
    logoImg: string;
    logoshadow: string;
    chainName: string;
    realtimePrice: string;
    daypersent: string;
    price: string;
    popularPair: {
        name: string;
        brandIcon: string;
    }[];
}

function Card() {
    const [nftData, setNftData] = useState<NftData[]>(cardData)
    return (
        <div className="w-full h-full">
            <div className='flex w-full flex-wrap gap-9 justify-center'>
                {nftData && nftData.map((item: NftData, idx: number) => (
                    <div key={`nft${idx}`} className='container bg-transparent  w-[292px] h-[440px]'>
                        <div className='block w-full h-full'>
                            <div className="flex items-end w-full h-full relative">
                                <div className="my-bg-image w-full h-[22.1rem] relative">
                                    <div className={`icon absolute top-[-52px] left-[94px]  h-[103px] w-[103px] rounded-full brand-logo ${item?.logoshadow}`}>
                                        <span className='h-[103px] w-[103px] relative'>
                                            <img className='relative top-[1.8rem] left-[28px] h-12 w-12 rounded-full' src={item?.logoImg} alt='' />
                                        </span>
                                    </div>
                                    <div className='mt-16 flex flex-col gap-1'>
                                        <h3 className="fontss font-bold text-[14px] text-brandBlue">{item?.chainName}</h3>
                                        <span className='w-[85%] m-auto p-3 flex flex-row justify-center items-center gap-3 bg-blue rounded-full'>
                                            <span className="fontss text-[16px]">{`$ ${item?.realtimePrice}`}</span><span className="fontss font-[600] text-[12px] text-green">{`${item?.daypersent}`}</span>
                                        </span>
                                        <h4 className="fontss text-titles font-bold text-[14px]">price</h4>
                                        <span className='w-[85%] m-auto p-3 bg-blue rounded-full fontss text-[16px]'>{`$ ${item?.price}`}</span>
                                        <h2 className="fontss text-titles font-bold text-[14px]">TVF</h2>
                                        <span className='w-2/3 m-auto p-2  bg-blue rounded-full flex flex-row gap-3 items-center justify-center'>
                                            {item?.popularPair?.map((itemss: { name: string; brandIcon: string }, idx: number) => (
                                                <img key={`icon${idx}`} className='w-8 h-8 rounded-full' src={itemss?.brandIcon} alt='' />
                                            ))}
                                        </span>
                                        <span className="fontss text-titles font-bold text-[14px]">popular pairs</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card
