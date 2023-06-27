import React from 'react'
import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-6">
        <img src={logo} alt="samurAi logo" className="w-28 object-contain rounded-xl shadow-xl shadow-blue-600" />

        <button
        type='button'
        onClick={()=>window.open('https://github.com/deepanshug1')}
        className="black_btn animate-pulse shadow-xl shadow-blue-600 ">
          Github
        </button>
      </nav>

        <h1 className='head_text'>
          Samuraize Articles with <br className='max-md:hidden' />
          <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
          Let the samurAi do its job and cut short your lengthy Articles into clear and concise summaries
        </h2>

    </header>
  )
}

export default Hero