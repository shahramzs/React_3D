import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>
        <h1 className='head-text'>
          My<span className='blue-gradient_text font-semibbold drop-shadow'>Projects</span>
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at elit sem. Proin fermentum commodo volutpat. Suspendisse et laoreet ex. Etiam eu enim a ante convallis dignissim. Pellentesque quis neque in enim luctus hendrerit. Etiam nec tellus sed augue viverra tincidunt. Donec quis neque ut nulla faucibus volutpat quis non enim. Maecenas et justo nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at elit sem. Proin fermentum commodo volutpat. Suspendisse et laoreet ex. Etiam eu enim a ante convallis dignissim. Pellentesque quis neque in enim luctus hendrerit. Etiam nec tellus sed augue viverra tincidunt. Donec quis neque ut nulla faucibus volutpat quis non enim. Maecenas et justo nulla.</p>
        </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project,i) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={project.iconUrl} alt='project icon' className='w-1/2 h-1/2 object-contain'/>
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link 
                     to={project.link} 
                     target="_blank"
                     rel="noopener noreferrer"
                     className='font-semibold text-blue-600'>
                  Live Link
                </Link>
                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-400'/>
      <CTA/>
    </section>
  )
}

export default Projects
