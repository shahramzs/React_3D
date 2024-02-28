import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

function Contact() {
  const formRef = useRef(null)
  const[form ,setForm] = useState({name:'', email:'', message:''})
  const[isLoading, setIsLoading] = useState(false)
  const[currentAnimation, setCurrentAnimation] = useState('idle')
  const {alert, showAlert, hideAlert} = useAlert()

 const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    setCurrentAnimation('hit')

    setInterval(()=>{
      showAlert({show:true, text:'Message sent successfully.', type:'success'})
    },3000)

    setTimeout(()=>{
      setCurrentAnimation('idle')
      setForm({name:'', email:'', message:''})
      hideAlert()
    },5000)
   
  } 

  const handleFocus = () => {
    setCurrentAnimation('walk')
  }

  const handleBlur = () => {
    setCurrentAnimation('idle')
  }

  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {alert.show && <Alert {...alert}/>}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get In Touch</h1>
        <form 
            className='w-full flex flex-col gap-7 mt-14'
            onSubmit={handleSubmit}
            >
          <label className='text-black-500 font-semibold'>
              Name
              <input
                type="text"
                name="name"
                className='input'
                placeholder='Your Name'
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
              Email
              <input
                type="email"
                name="email"
                className='input'
                placeholder='Your Email'
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
          </label>
          <label className='text-black-500 font-semibold'>
              Your Message
              <textarea
                type="text"
                rows={4}
                name="message"
                className='textarea'
                placeholder='Let me know how i can help you?'
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}/>
          </label>
          <button 
              type="submit" 
              className='btn' 
              disabled={isLoading}
              onFocus={handleFocus}
              onBlur={handleBlur}>
                  {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas camera={{
          position:[0, 0 ,5],
          fov:75,
          near:0.1,
          far:1000
        }}>
          <directionalLight
              intensity={2.5}
              position={[0,0,1]}/>
              <ambientLight
               intensity={0.5}/>
          <Suspense fallback={<Loader/>}>
            <Fox
            currentAnimation={currentAnimation}
             position={[1.2, 0.35, 0]}
             scale={[0.7, 0.7,0.7]}
             rotation={[12.6,-0.9,0]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
