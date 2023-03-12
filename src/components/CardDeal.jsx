import React from 'react'
import{card} from '../assets'
import styles,{layout} from '../style'
import Button from './Button'

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Every Business <br className='sm:block hidden'/>
        deserves a fighting chance</h2>
         <p className={`${styles.paragraph} max-w-[480px] mt-5 mb-10`}>
         Say goodbye to the stress and frustration of trying to navigate the complex world of online business.
         At Onlinegrowpro, we're committed to helping small business owners in America succeed.
         </p>
         <Button styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src ={card} alt="card" className="w-[100%] h-[100%]"/>
      </div>
    </section>
  )

export default CardDeal