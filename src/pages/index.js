import React from 'react';
import backgroundImg from '../black_background.webp';
import cardAsset from '../card_asset.webp';

function HomePage() {
    return (
        <main class="">
  <div class="flex flex-col bg-black">
    <div>
      <section class="py-0" style={{ backgroundColor: '#000', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100vw', height: '100vh', background: `url(${backgroundImg})`}}>
        <div class="flex mx-auto w-full justify-center z-0 relative" style={{ height: '100vh', maxWidth: '1280px'}}>
          <img alt="card_asset" src={cardAsset} class="z-0 absolute w-[225px] md:w-[450px] -translate-x-1/2 md:left-auto md:right-0 md:-translate-x-0 top-[20%] md:top-[22%] -translate-y-[50%] md:-translate-y-[50%] css-0" style={{transform: 'translateY(3.00965px) translateZ(0px)', width: '225px' }} />
          <div class="z-10 w-full mb-28 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 class="font-medium max-w-[300px] md:max-w-[550px] text-3xl md:text-[3.4rem] md:leading-[54px] text-white mb-20">
              <span>India’s Credit Revolution is here. <span class="uni-gradient-primary"> Pay 1/3rd. </span> Anywhere. </span>
            </h1>
            <div class="hidden md:block">
              <div class="flex justify-between items-center block max-w-[94vw]">
                <div class="flex flex-col">
                  <form>
                    <div class="flex bg-[#454B51] p-1 pl-2 rounded-xl justify-between">
                      <div class="flex items-center">
                        <input class="bg-[#454B51] border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44" placeholder="Enter Phone Number" value="" />
                        <span class="w-6 flex items-center justify-end h-full"></span>
                      </div>
                      <button type="submit" class="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-uni-yellow rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed">
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </form>
                  <div class="consent flex items-center py-4 px-2 max-w-xs">
                    <input type="checkbox" checked="" id="consent-msg" />
                    <label for="consent-msg" class="consent text-uni-text-gray text-[10px] leading-3 cursor-pointer">By submitting this information, you agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</label>
                  </div>
                </div>
              </div>
              <div class="flex hidden max-w-xs flex-col justify-start">
                <div class="w-full max-w-[300px]">
                  <a href="https://uni-growth.onelink.me/v6cm/" target="_blank" rel="noopener noreferrer" class="block google-btn-2 font-medium p-4 rounded-lg z-10 bg-[#FDEF78] text-black -mt-2 disabled:bg-[#AEAB8C]">
                    <div class="w-full flex justify-center items-center">
                      <span>Download</span>
                    </div>
                  </a>
                </div>
                <div class="my-2">
                  <p class="text-white text-[10px] leading-3">Thank you for your interest in the Uni Card. <br /> Download the Uni Cards app now and get your Uni Card in minutes. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section class="py-12 lg:py-[100px] bg-black lg:py-[100px]">
      <div class="w-full max-w-7xl mx-auto px-6 md:px-4 md:flex my-auto md:pb-[50px]">
        <div class="mx-auto w-[300px] md:w-[500px] md:max-w-[500px] md:h-[500px] mb-[50px] md:flex-[50%]" style={{ opacity: '1', transform: 'none'}}>
          <video muted="" playsinline="" disablepictureinpicture="" class="w-full h-full">
            <source src="/videos/one-third.mp4" type="video/mp4" />
            <source src="/videos/one-third.webm" type="video/webm" />
          </video>
        </div>
        <div class="m-auto w-full md:max-w-md lg:max-w-lg" style={{opacity: '1', transform: 'none'}}>
          <span class="text-lg uni-gradient-primary md:text-4xl md:leading-8">
            <span class="uni-gradient-primary"> Uni Pay 1/3rd Card </span>
          </span>
          <p class="text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl">With Great Flexibility, <br />Comes Great Power. </p>
          <p class="text-gray-4 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8">Split your spends into <span class="text-white"> 3 parts over 3 months</span> at <br /> no extra charges. And, <span class="text-white">get 1% rewards</span> if you pay in 1 month. </p>
          <div class="mt-8 md:mt-16">
            <a href="https://www.uni.cards/pay-one-third" class="apply_btn py-3 px-8 md:px-11 text-white text-sm md:text-xl rounded-[20px] md:rounded-[25px] leading-7 md:leading-[50px] bg-black border border-green">Know More</a>
          </div>
        </div>
      </div>
      <div class="w-full max-w-7xl mx-auto px-6 md:px-4  md:flex my-auto md:flex-row-reverse pt-[50px]">
        <div class="mx-auto w-[300px] md:w-[500px] md:max-w-[500px] md:h-[500px] mb-[50px] md:flex-[50%]" style={{ opacity: '1', transform: 'none'}}>
          <video muted="" playsinline="" disablepictureinpicture="" class="w-full h-full">
            <source src="/videos/pay_half.mp4" type="video/mp4" />
            <source src="/videos/pay_half.webm" type="video/webm" />
          </video>
        </div>
        <div class="m-auto w-full md:max-w-md lg:max-w-lg" style={{ opacity: '1', transform: 'none'}}>
          <span class="text-lg uni-gradient-primary md:text-4xl md:leading-8">
            <span class="uni-gradient-secondary">Uni Pay 1/2 Card</span>
          </span>
          <p class="text-[28px] leading-[1.2] font-medium sm:text-3xl break-words text-white md:text-5xl">Smart Payments, <br /> Delightful Rewards. </p>
          <p class="text-gray-4 text-[14px] md:text-2xl md:leading-7 my-4 md:my-8">
            <span class="text-white">Split your spends in 2.</span> Or, <br /> pay in 1 month &amp; get <span class="text-white">1.2% rewards!</span>
          </p>
          <div class="mt-8 md:mt-16">
            <a href="https://www.uni.cards/pay-half" class="apply_btn py-3 px-8 md:px-11 text-white text-sm md:text-xl rounded-[20px] md:rounded-[25px] leading-7 md:leading-[50px] bg-black border border-pink">Know More</a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <div class="py-12 md:py-[150px]">
    <section>
      <div class="w-full max-w-7xl mx-auto px-6 md:px-4  undefined">
        <div class="flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2] tx-black-primary md:pb-16 font-medium">
          <p style={{ opacity: '1', transform: 'none'}}>Split your payments, anywhere and everywhere.</p>
          <p style={{ opacity: '1', transform: 'none'}}>
            <span class="css-1vau3j1">Earn the best rewards.&nbsp;</span>Enjoy round the clock&nbsp; <span class="css-1vau3j1">WhatsApp support.&nbsp;</span>It
          </p>
          <p style={{ opacity: '1', transform: 'none' }}>takes just 5 minutes to get your card, and it’s&nbsp; <span style={{ backgroundImage: 'linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)'}} class="css-1vau3j1">lifetime free:&nbsp;</span>no
          </p>
          <p style={{ opacity: '1', transform: 'none' }}>joining fee, no annual charges.</p>
        </div>
        <div class="flex md:justify-center py-12" style={{ opacity: '0', transform: 'translateY(-100px) translateZ(0px)' }}>
          <div style={{ background:'linear-gradient(140.86deg, #65ECD8 11.07%, #FDEF78 80.28%)'}} class="flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center">
            <img alt="down_arrow" src="" loading="lazy" class="w-9 md:w-14 css-0" />
          </div>
        </div>
      </div>
    </section>
    <div class="w-full max-w-7xl mx-auto px-6 md:px-4  px-8">
      <div class="flex justify-center flex-col">
        <div class="flex my-16 md:items-center flex-col md:flex-row
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div class="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div class="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Split your payments, anywhere and everywhere. <span style={{ color: '#a4abb3'}}> Accepted at 99.9% of merchants. <span></span>
                  </span>
                </p>
              </div>
            </div>
            <div class="info-caption">
              <img src="/images/backed_by_visa.svg" alt="" class="mt-10 h-[50px] css-1e2fy0l" loading="lazy" />
            </div>
          </div>
          <div class="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div class="flex justify-center overflow-hidden">
              <div class="relative w-[280px] lg:w-[448px]">
                <img alt="" src="/images/redesign/semi-circle.svg" class="animate z-0 absolute w-[215px] lg:w-[380px] right-[60px] top-7 css-0" style={{ opacity: '1', transform: 'none'}} />
                <img alt="" src="/images/redesign/places.webp" class="relative z-10 -left-4 -bottom-4 w-[280px] lg:w-[448px] css-0" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex my-16 md:items-center flex-col md:flex-row-reverse
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div class="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div class="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Earn rewards every time you Pay in Full. <span style={{ color: '#a4abb3', display: 'block'}}>Soon, get up to 5X value on Uni Store.</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div class="flex justify-center">
              <div class="relative w-[280px] lg:w-[448px]">
                <div class="animate relative rounded-full w-44 h-44 left-4 top-6 lg:w-72 lg:h-72 lg:top-10 lg:left-10" style={{ backgroundColor: 'rgb(122, 255, 236)' , opacity: '1', transform: 'none' }}></div>
                <img alt="" src="/images/redesign/reward_points.webp" loading="lazy" class="absolute -top-8 left-4 w-[280px] lg:w-[448px] bg-transparent css-0" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex my-16 md:items-center flex-col md:flex-row
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div class="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div class="info-top-caption">
              <div>
                <p style={{ lineHeight: '18px' }} class="text-[#4FC8B6] text-sm mb-1"> Coming Soon!</p>
              </div>
            </div>
            <div class="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Take all the time you need with longer EMIs.</p>
              </div>
            </div>
          </div>
          <div class="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div class="flex justify-center">
              <div class="relative w-[280px] lg:w-[448px] pl-8 lg:pl-16 pt-16 lg:pt-24">
                <img alt="" src="/images/redesign/semi-circle.svg" loading="lazy" class="animate relative w-56 lg:w-80 css-0" style={{ opacity: '1', transform: 'translateY(0px) rotate(180deg) translateZ(0px)' }} />
                <img alt="" src="/images/redesign/time.webp" loading="lazy" class="absolute left-0 bottom-12 lg:bottom-16 lg:-left-4 w-[280px] lg:w-[448px] css-0" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex my-16 md:items-center flex-col md:flex-row-reverse
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
          <div class="flex flex-col justify-start text-[22px] leading-7 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
            <div class="info-top-caption">
              <div>
                <p style={{ lineHeight: '18px'}} class="text-[#4FC8B6] text-sm mb-1"> Coming Soon!</p>
              </div>
            </div>
            <div class="w-[220px] md:w-[300px] lg:w-[510px]">
              <div>
                <p>Cash out to bank accounts with Uni Cash.</p>
              </div>
            </div>
          </div>
          <div class="w-full pt-16 lg:pt-0 lg:w-[50%]">
            <div class="flex justify-center">
              <div class="relative w-[280px] lg:w-[512px]">
                <div class="animate relative flex pl-12 lg:pl-28" style={{ opacity: '1', transform: 'translateY(16px) translateZ(0px)' }}>
                  <div class="w-32 h-32 lg:w-52 lg:h-52 bg-uni-yellow rounded-full"></div>
                  <div class="w-16 h-16 ml-6 lg:w-24 lg:h-24 bg-uni-yellow rounded-full"></div>
                </div>
                <img alt="" src="/images/redesign/bank.webp" loading="lazy" class="absolute -top-4 w-[280px] sm:w-96 lg:w-[512px] css-0" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
          <p>Lifetime <span class="text-uni-green">free. </span>
            <span class="block sm:inline-block md:text-center">No joining fee.</span>
            <span class="block md:text-center"> No annual charges. </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</main>
    );
}

export default HomePage;