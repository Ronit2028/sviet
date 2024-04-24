import React from 'react'
import backdrop from '@/assets/Programs/DSC00838.JPG'

const InstitutionHeader = ({institute , category}) => {
   
    return (
        <div className='h-[80vh] text-white' style={{ backgroundImage: `url(${backdrop.src})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
            <div className="bg-[#000000b1] overlay h-full w-full flex flex-col justify-center">
                <div className="w-10/12 mx-auto py-6">
                    <p className='text-4xl mb-3 font-bold'>
                        {institute}
                    </p>
                    <p className='text-2xl mb-6 font-bold'>
                       
                    </p>
                    <p className='text-md w-1/2 border-l-4 border-[#fea700] pl-2'>
                              {category}            </p>
                        <button className='text-lg text-white rounded-md bg-[#fea700] w-fit p-2 mt-5'>Mandatory disclosures   <i className="fas fa-download ml-2"></i>
</button>

                </div>
            </div>
        </div>
    )
}

export default InstitutionHeader