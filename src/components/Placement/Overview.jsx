import React from 'react'

const Overview = () => {
    return (
        <div className='py-12 w-10/12 mx-auto'>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-8 md:gap-4 gap-3'>
                <div className='my-auto'>
                    <p className="text-3xl font-medium">
                        Impeccable Placements
                    </p>
                    <p className='text-lg pl-2 border-l-4 border-[#fea700] mt-3'>Bridging the gap between industry & Academia</p>
                   
                    <p className='pt-6 text-justify'>
                    At SVIET, the Placement department constantly keeps working towards bridging the gap between industry & Academia. Our endeavor is to keep the needs of the industry perspective and in turn make the learning more pragmatic and applicable. The placement activities are for the students and by the students. SVGOI has been successful in adding more and more companies in the list of its recruiters in last few years. The Training and placement cell of SVGOI strives for converting every student in to a 100% employable asset while they are pursuing their education with us and endeavors for accomplishing the concept –“One Person One Job.”  </p>
                </div>
                <div className='grid grid-cols-1 gap-4'>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/0Uj5juV2Ik0?si=bfyzejRiGcCLnwWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            className='rounded-md shadow-md'
                        ></iframe>
                    </div>
                    <div>
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/9Nb9t09ea0w?si=kos-JSWKk-xke59b" title="YouTube video player" frameborder="0"
                            className='rounded-md shadow-md' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview