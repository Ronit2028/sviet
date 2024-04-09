import React from 'react';

const Highlights = ({ programHighlights }) => {
    return (
        <div className='w-10/12 my-6 mx-auto p-6 bg-[#00112d] text-white rounded-md'>
            <p className="text-3xl py-6 text-white font-medium">
                Program Highlights
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                {programHighlights.map((highlight, index) => (
                    <div key={index} className='flex pb-4 mb-4 items-center gap-2'>
                        <i className='fa fa-arrow-right mr-1 text-[#fea700]'></i>
                        <p className='text-lg'>
                            {highlight}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Highlights;
