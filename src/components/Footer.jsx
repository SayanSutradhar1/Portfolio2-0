import React from 'react'
import GithubLogo from '../assets/icons/GithubLogo.svg'
import linkedInLogo from '../assets/icons/linkedInLogo.svg'

const Footer = () => {
  return (
    <div className=' bg-black w-full flex justify-center px-12 gap-20 py-4 items-center max-[426px]:flex-col-reverse max-[426px]:gap-2'>
      <div className='flex flex-[0.25] justify-center'>Made with &#9829;</div>
      <div className='flex flex-[0.75] justify-center gap-4'>
        <a href='https://github.com/SayanSutradhar1' target='_blank'>
          <img src={GithubLogo} alt="" className='max-h-[30px]'/>
        </a>
        <a href='https://www.linkedin.com/in/sayan-sutradhar-041957257' target='_blank'>
          <img src={linkedInLogo} alt="" className='max-h-[30px]'/>
        </a>
      </div>
    </div>
  )
}

export default Footer