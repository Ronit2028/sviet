"use client";
import React from "react";
import Image from "next/image";
import banner from "@/assets/CampusLife/sviet-1.jpg";
import img1 from "@/assets/CampusLife/IMG_8939.JPG";
import img2 from "@/assets/CampusLife/audi.JPG"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ImageGrid from "@/components/CampusLife/ImageGrid"
import Data from "@/assets/CampusLife/filterResponse"
import Card from "@/components/CampusLife/Card"
import FilterCard from "@/components/CampusLife/FiterCard"
import "slick-carousel/slick/slick-theme.css";
const page = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplayspeed: 3000,
    arrows: true,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings} className="h-[60vh]">
        <div className="h-[60vh] lg:h-[60vh] lg:mb-5 md:h-[50vh] sm:h-[50vh] w-full">
          <Image
            className="object-cover h-[60vh] w-full "
            src={banner}
            alt="banner"
          />
        </div>
        <div className="h-[60vh] lg:h-[60vh] lg:mb-5 md:h-[50vh] sm:h-[50vh] w-full">
          <Image
            className="object-cover h-[60vh] w-full "
            src={banner}
            alt="banner"
          />
        </div>
        <div className="h-[60vh] lg:h-[60vh] lg:mb-5 md:h-[50vh] sm:h-[50vh] w-full">
          <Image
            className="object-cover h-[60vh] w-full "
            src={banner}
            alt="banner"
          />
        </div>
        <div className="h-[60vh] lg:h-[60vh] lg:mb-5 md:h-[50vh] sm:h-[50vh] w-full">
          <Image
            className="object-cover h-[60vh] w-full "
            src={banner}
            alt="banner"
          />
        </div>
      </Slider>
      <div className="p-5"></div>
      <div className="p-5">
        <h2 className="text-3xl  font-bold text-center pb-5 pt-4">
          A HOME <span className="text-[#fea700]">AWAY FROM HOME</span>
        </h2>
        <div className="flex flex-wrap gap-5 justify-around items-center mt-7 mb-5">
          <div className="w-[450px] ">
            <div className="flex gap-3 justify-center items-center">
              <div className="border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[160px]"></div>
              <div className="border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[160px]"></div>
            </div>
            <div className="flex gap-3 justify-center items-center mt-3">
              <div className="border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[160px]"></div>
              <div className="border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[160px]"></div>
            </div>
          </div>
          <div className="w-[450px] ">
            <Image src={img1} className="object-cover" alt="" />
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-around items-center mt-7 mb-5">
          <div className="w-[450px] ">
            {/* <div className='flex gap-3 justify-center items-center'>
                    <div className='border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[180px]'></div>
                    <div className='border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[180px]'></div>
                </div>
                <div className='flex gap-3 justify-center items-center mt-3'>
                    <div className='border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[180px]'></div>
                    <div className='border-[1px] hover:border-orange-400 duration-300 rounded-md shadow-md w-[45%] h-[180px]'></div>
                </div> */}
                <div>
                  <Slider {...settings}>
                    <div>
              <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="85"
                  className="absolute top-6 left-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    Awesome idea. Can't wait to see how this turns out!
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Exmaple name
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Job designation
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      src="https://i.pravatar.cc/300"
                      className="h-14 w-14 object-cover"
                      loading="lazy"
                      width="56"
                      height="56"
                    />
                  </div>
                </figcaption>
              </figure>
                    </div>
                    <div>
              <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="85"
                  className="absolute top-6 left-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    Awesome idea. Can't wait to see how this turns out!
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Exmaple name
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Job designation
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      src="https://i.pravatar.cc/300"
                      className="h-14 w-14 object-cover"
                      loading="lazy"
                      width="56"
                      height="56"
                    />
                  </div>
                </figcaption>
              </figure>
                    </div>
                    <div>
              <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10">
                <svg
                  aria-hidden="true"
                  width="105"
                  height="85"
                  className="absolute top-6 left-6 fill-slate-100"
                >
                  <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                </svg>
                <blockquote className="relative">
                  <p className="text-lg tracking-tight text-slate-900">
                    Awesome idea. Can't wait to see how this turns out!
                  </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                  <div>
                    <div className="font-display text-base text-slate-900">
                      Exmaple name
                    </div>
                    <div className="mt-1 text-sm text-slate-500">
                      Job designation
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-full bg-slate-50">
                    <img
                      alt=""
                      src="https://i.pravatar.cc/300"
                      className="h-14 w-14 object-cover"
                      loading="lazy"
                      width="56"
                      height="56"
                    />
                  </div>
                </figcaption>
              </figure>
                    </div>
                  </Slider>
                </div>
            
          </div>
          <div className="w-[450px] ">
            <Image src={img2} className="object-cover" alt="" />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-3xl  font-bold text-center pb-5 pt-5">BROWSE PAST <span className="text-[#fea700]">EVENTS</span></h2>
          <div>
            <h3></h3>
          </div>
          <div >
            {/* <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div>
            <div className="rounded-md shadow-md w-[100%] h-[300px] border-[1px] border-slate-300"></div> */}
           <FilterCard/>
            </div>
            <div>
              <ImageGrid/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
