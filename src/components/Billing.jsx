import React from 'react'
import {bill} from '../assets'
import styles,{layout} from '../style'

const Billing = () =>  (
    <section id ="product" className ={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]"/>
        <div className="absolute z-[3] -left -1/2 top 0 w-[50%] h-[50%] rounded-full white__gradient"/>
        <div className="absolute z-[0] -left -1/2 bottom 0 w-[50%] h-[50%] rounded-full pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Monitor and Control your business <br className='sm:block hidden'/> 
          with our suite of tools
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our suite of tools is specifically designed to help you grow your business online and expand your customer base.
        If you're struggling with tax filing, building a new website, setting up an online store, SEO, social media marketing,
        responding to customer reviews, or running effective advertising campaigns, Onlinegrowpro has got you covered. 
        </p>
      </div>
    </section>
  )


export default Billing