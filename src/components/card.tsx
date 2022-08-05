import { useState } from "react"
import { cardData } from "../constant"

interface NftData {
    id: number;
    logoImg:string;
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
const [nftData,setNftData] = useState<NftData[]>(cardData)
    return (
        <div className="w-full h-full">
            <div className='flex w-full flex-wrap gap-9 justify-center'>
                {nftData&&nftData.map((item:NftData, idx:number) => (
                    <div key={`nft${idx}`} className='container bg-transparent  w-[292px] h-[440px]'>
                        <div className='block w-full h-full'>
                            <div className="flex items-end w-full h-full relative">

                                <div className="my-bg-image w-full h-[22.1rem] relative">

                                    <div className='icon absolute top-[-52px] left-[94px]  h-[103px] w-[103px] rounded-full brand-logo '>
                                        <span className='h-[103px] w-[103px] relative'>
                                            <img className='relative top-[2.1rem] left-[2.1rem] h-9 w-9 rounded-full' src={item?.logoImg} alt='' />
                                        </span>
                                    </div>

                                    <div className='mt-16 flex flex-col gap-1'>
                                        <h3>{item?.chainName}</h3>
                                        <span className='w-[85%] m-auto p-3 flex flex-row justify-center items-center gap-3 bg-blue rounded-full'>
                                            <span>{`$ ${item?.realtimePrice}`}</span><span>{`${item?.daypersent}`}</span>
                                        </span>
                                        <h4>price</h4>
                                        <span className='w-[85%] m-auto p-3 bg-blue rounded-full' >{`$ ${item?.price}`}</span>
                                        <h2>TVF</h2>
                                        <span className='w-2/3 m-auto p-2  bg-blue rounded-full flex flex-row gap-3 items-center justify-center'>
                                            {item?.popularPair?.map((itemss:{name:string;brandIcon:string}, idx:number) => (
                                                <img key={`icon${idx}`} className='w-8 h-8 rounded-full' src={itemss?.brandIcon} alt='' />
                                            ))}
                                        </span>
                                        <span>popular pairs</span>
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
