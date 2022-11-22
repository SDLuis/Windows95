import portfolio from '../assets/portfolio.png'
import linkedIn from '../assets/linkedIn.png'
import gitgub from '../assets/github.png'

export default function Medio () {
  return (
    <div className='grid fixed z-[10] grid-cols-1 w-20 ml-5 gap-10'>
      <a className='scale-[1] transform-cpu duration-300 hover:scale-[1.1]' target='_blank' href='https://www.linkedin.com/in/luis-tejeda-735825234/' rel='noreferrer'>
        <img width={300} height={300} src={linkedIn} alt='linkedIn' />
        <p className='text-center font-bold'>LinkedIn</p>
      </a>
      <a className='scale-[1] transform-cpu duration-300 hover:scale-[1.1]' target='_blank' href='https://github.com/SDLuis' rel='noreferrer'>
        <img width={300} height={300} src={gitgub} alt='github' />
        <p className='text-center font-bold'>Github</p>
      </a>
      <a className='scale-[1] transform-cpu duration-300 hover:scale-[1.1]' target='_blank' href='https://luisrincon.netlify.app/' rel='noreferrer'>
        <img width={300} height={300} src={portfolio} alt='portfolio' />
        <p className='text-center font-bold'>Portfolio</p>
      </a>
    </div>
  )
}
