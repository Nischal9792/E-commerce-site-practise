import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempora vero rem similique veritatis. Voluptatum quo tempora animi consequatur, nulla excepturi. Suscipit numquam fugit, magni pariatur modi iusto dignissimos odit!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate repellendus, delectus maxime, eligendi soluta voluptate iusto libero earum aspernatur impedit reiciendis aperiam vero beatae sint dolores nemo? Omnis, alias consectetur!</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid culpa distinctio vitae quae officia officiis dignissimos totam. Vitae explicabo praesentium, laboriosam iure a illo quibusdam magni quis officiis impedit hic!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo debitis, temporibus animi totam fugiat commodi sequi, veniam rerum ullam nesciunt tempore exercitationem nobis nulla! Assumenda consequatur quos fugit aliquid? Accusantium?
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dignissimos non voluptatem molestiae, adipisci dolorem qui praesentium animi quidem ipsum impedit ducimus magni, nemo in ipsa beatae repudiandae magnam laborum?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dignissimos non voluptatem molestiae, adipisci dolorem qui praesentium animi quidem ipsum impedit ducimus magni, nemo in ipsa beatae repudiandae magnam laborum?</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
