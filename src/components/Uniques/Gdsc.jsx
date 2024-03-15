"use client"
import React from 'react'
import img  from'../../assets/LandingPage/bannerImage.jpg'

const Gdsc = () => {
  return (
    <>
    <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-5/6 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={img.src}/>
      <div class="lg:w-1/2 w-full lg:pl-16 lg:py-6 mt-6 lg:mt-0">
        <h2 class="text-sm title-font text-gray-500 tracking-widest">KUCH TO H BHAI</h2>
        <h1 class="text-gray-900 text-5xl title-font mb-5 font-medium "><span className='text-rose-800'>Go</span><span className='text-[#fea700]'>og</span><span className='text-green-900'>le</span> Developer's Student  Club </h1>
       
        <p class="leading-relaxed mb-4">Fam locavore kickstarter dist tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
        <p class="leading-relaxed">Fter distillery. cha taximy chia microdosing tilde DIY. XOXO fam indxgaw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>

        <a class="text-red-500 inline-flex items-center mt-4">Learn More
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
      </div>
    </div>
  </div>
</section>
  
 

  


    </>

  )
}

export default Gdsc