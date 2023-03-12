import styles from '../style'
import {discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section id ="home" className ={`flex 
   md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart}
      flex-col xl:px-0 sm-px16 px-6`}>
      <div className="flex flex-row 
        items-center py-[6px] px-4 
        bg-discount-gradient rounderd-[10px] mb-2">
          <img src ={discount} alt="discount"
            className="w-[32px] h-[32px]"/>
            <p className={`${styles.paragraph} ml-2`}>
              <span className="font-bold">Get 50% off</span> on your first month
           </p>
      </div>
      <div className="flex flex-row
          justify-between items-center w-full">
            <h1 className="flex-1 font-poppins
                font-semibold ss:text-[72px] text-[52px] 
                text-white ss:leading-[100px] leading-[40px]">
                Grow Your <br className="sm:block hidden"/>{" "}
            <span className="text-gradient">Business Online</span> {" "}
            <br></br>
          </h1>

      <div className="ss:flex hidden md:mr-4 mr-0">
       <GetStarted/>  
      </div>  
      </div>
        <h1 className="font-poppins
        font-semibold ss:text-[68px] text-[52px] 
        text-white ss:leading-[100px] leading-[75px]
        w-full"> Today!
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We understand that running a small business can be challenging,
        and that's why we're here to help. Our team of experts has
        years of experience in digital marketing, website design, and online advertising. We've helped hundreds of businesses like yours achieve their goals online
        </p>
      </div>
    <div className={`flex-1 flex ${styles.flexCenter}
    md:my-0 my-10 relative`}>
      <img src ={robot} alt ="billing" 
      className='w-[100%] h-[100%] relative z-[5]'/>

       <div className='absolute z-[0] w-[40%]
       h-[35%] top-0 pink__gradient'></div>
       <div className='absolute z-[1] w-[80%]
       h-[80%] rounded-full bottom-40
       white__gradient'></div>
       <div className='absolute z-[0] w-[50%]
       h-[50%] right-20 bottom-20 blue__gradient'>
       </div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
 
)

export default Hero