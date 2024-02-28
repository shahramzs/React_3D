import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'


const About = () => {
  return (
    <section className='max-container'>
          <h1 className='head-text'>
             Hello, I'm <span className='blue-gradient_text font-semibbold drop-shadow'>Shahram.ZS</span>
          </h1>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>Electrical And Control Engineer And Software Engineer, Specializing in technical education through hands-on learning and building applications.</p>
          </div>
          <div className='py-10 flex flex-col'>
            <h3 className='subhead-text'>My Skills</h3>
            <div className='mt-16 flex flex-wrap gap-12'>
              {skills.map((skill,i) => (
                  <div className='block-container w-10 h-20' key={i}>
                    <div className='btn-back rounded-xl'/>
                    <div className='btn-front rounded-xl flex justify-center items-center'> 
                      <img 
                         src={skill.imageUrl}
                         alt={skill.name}
                         className='w-1/2 h-1/2 object-contain'/>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          <div className='py-16'>
                <h3 className='subhead-text'>Work Experience</h3>
                <div className='mt-5 flex flex-col gap-3 text-slate-500'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at elit sem. Proin fermentum commodo volutpat. Suspendisse et laoreet ex. Etiam eu enim a ante convallis dignissim. Pellentesque quis neque in enim luctus hendrerit. Etiam nec tellus sed augue viverra tincidunt. Donec quis neque ut nulla faucibus volutpat quis non enim. Maecenas et justo nulla.</p>
                </div>
                <div className='mt-12 flex'>
                  <VerticalTimeline>
                    {experiences.map((experience,i) => (
                      <VerticalTimelineElement 
                          key={experience.company_name}
                          date={experience.date}
                         icon={<div className='flex justify-center items-center w-full h-full'>
                          <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[60%] object-contain'/>
                         </div>}
                         iconStyle={{background: experience.iconBg}}
                         contentStyle={{
                          borderBottom:'8px',
                          borderStyle:'solid',
                          borderBottomColor: experience.iconBg,
                          boxShadow:'none'}}>
                        <div>
                          <h3 className='text-black text-xl font-poppins font-semibold'>{experience.title}</h3>
                          <p className='text-black-500 font-mdium font-base' style={{margin:0}}>{experience.company_name}</p>
                        </div>
                        <ul className='my-5 list-disc ml-5 space-y-2'>
                          {experience.points.map((point,i) => (
                            <li key={i} className='text-black-500/50 font-normal pl-1 text-sm'>{point}</li>
                          ))}
                        </ul>
                      </VerticalTimelineElement>
                    ))}
                  </VerticalTimeline>
                </div>
          </div>
          <hr className='border-dlate-200'/>
          <CTA/>
    </section>
  )
}

export default About
