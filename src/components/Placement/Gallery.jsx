// import React from "react";
// import logo1 from '../../assets/placement/companies/logo1.jpg'
// import logo2 from '../../assets/placement/companies/logo2.jpg'
// import logo3 from '../../assets/placement/companies/logo3.jpg'
// import logo4 from '../../assets/placement/companies/logo4.jpg'
// import logo5 from '../../assets/placement/companies/logo5.jpg'
// import logo6 from '../../assets/placement/companies/logo6.jpg'
// import logo7 from '../../assets/placement/companies/logo7.jpg'
// import logo8 from '../../assets/placement/companies/logo8.jpg'
// import logo9 from '../../assets/placement/companies/logo9.jpg'
// import logo10 from '../../assets/placement/companies/logo10.jpg'
// import logo11 from '../../assets/placement/companies/logo11.jpg'

// const Gallery = () => {
//   return (
//     <div className="bg-[#f2f1f0] mt-[-50px]">
//       <div className="w-full h-full py-12">
//         <div className="w-10/12 mx-auto py-12">
//           <p className="text-3xl font-medium pb-3">Real-World Engagement</p>
//           <p className="text-xl pl-2 border-l-4 border-[#fea700]">
//           Explore how our industry connections transform students into professionals.
//           </p>
//           <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-12">
//             <div className="grid gap-4">
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo7.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo1.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo2.src} alt="Google"
//                 />
//               </div>
//             </div>
//             <div className="grid gap-4">
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo3.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo4.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center "
//                   src={logo5.src} alt="Google"
//                 />
//               </div>
//             </div>
//             <div className="grid gap-4">
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo6.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center "
//                   src={logo8.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo9.src} alt="Google"
//                 />
//               </div>
//             </div>
//             <div className="grid gap-4">
//               <div>
//                 <img
//                   className="h-auto max-w-full rounded-lg object-cover object-center"
//                   src={logo10.src} alt="Google"
//                 />
//               </div>
//               <div>
//                 <img
//                   src={logo11.src} alt="Google"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
    
//   );
// };

// export default Gallery;
"use client";
import React from "react";
import styled, { keyframes, css } from "styled-components";

function App() {
  const row1 = [
    "https://utfs.io/f/08e113ca-9cd3-4f3c-a891-75e0fdaea010-nlisdm.jpeg",
    "https://utfs.io/f/cb253631-d4f2-4c3e-81e3-202fdb7387a5-cnlz8q.png",
    "https://utfs.io/f/a97ac1eb-0e9f-4937-a79d-3c478cca09d2-nlisfc.png",
    "https://utfs.io/f/7e1b15d5-916a-4234-bf40-24276213ea46-wrdm82.logowik.com.webp",
    "https://utfs.io/f/6e71cab4-ef0d-4220-b681-2f8262fe9a8e-nm33wo.png",
    "https://utfs.io/f/3c7777f2-98a1-42c4-856b-621c447d4e6d-nlisdm.png",
  ];

  const row2 = [
    "https://utfs.io/f/afc3ff57-8fb0-4ca6-8dbd-b12ccb4f468d-1krgma.jpg",
    "https://utfs.io/f/fdb39688-3cb6-48c2-8581-e1cad1c33835-saazj8.svg.png",
    "https://utfs.io/f/5ad495c7-de1c-408e-9975-77d9bc54e9fe-hmaenf.svg.png",
    "https://utfs.io/f/7c92b6fc-b63c-4586-a008-22a7465853cc-vv2d4f.png",
    "https://utfs.io/f/2fa214b4-d711-41e4-84bd-590eca2f0fd9-hvaotc.png",
    "https://utfs.io/f/4bb4e92b-63f4-4693-af59-bbb9d4fca08c-8kjywp.webp",
  ];

  return (
    <AppContainer>
      <Wrapper>
        <Text className="text-3xl font-medium">Real-World Engagement</Text>
        <Note className="pl-2 border-l-4 border-[#fea700] text-xl">Explore how our industry connections transform students into professionals.</Note>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el, index) => (
              <ImageGroup key={index}>
                <Image src={el} />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  height: 60vh;
  color: #000000;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 80vh;
  }
`;

const Wrapper = styled.div`
  width: 80%;
  height: fit-content;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  margin-bottom: 10px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Note = styled.div`
  margin-bottom: 40px;
  color: black;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );

  @media (max-width: 768px) {
    mask-image: linear-gradient(
      to right,
      hsl(0 0% 0% / 0),
      hsl(0 0% 0% / 1) 20%,
      hsl(0 0% 0% / 1) 80%,
      hsl(0 0% 0% / 0)
    );
  }
`;

const scrollX = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;

const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);

  @media (max-width: 768px) {
    width: clamp(8rem, 1rem + 20vmin, 15rem);
    padding: calc(clamp(8rem, 1rem + 20vmin, 15rem) / 10);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  @media (max-width: 768px) {
    padding: 3px 10px;
  }
`;
