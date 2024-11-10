import React from 'react'

const Skils = () => {
  return (
    <div className='container pt-32' >
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div  data-aos="fade-down-left">
        <h2 className='text-3xl md:text-4xl'>I Work With Technologies</h2>
                <p className='text-gray-400 pt-2'>
As a passionate developer, I work with a diver se set of technologies that empower me to create dynamic and efficient web applications. My expertise in Node.js allows me to build scalable server-side applications, leveraging its non-blocking architecture for optimal performance. I enhance user interfaces using CSS, crafting responsive and visually appealing designs that improve user experience. Additionally, I utilize TypeScript to write robust, type-safe code, which helps prevent errors and makes my codebase more maintainable. Together, these technologies enable me to deliver high-quality solutions tailored to meet the needs of my clients.


                </p>
            </div>
            <div>
              <div className='grid grid-cols-2 text-red-600 text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                  <h2  data-aos="fade-down-left">Typescript</h2>
                  <h2  data-aos="fade-down-left">React.js</h2>
                  <h2  data-aos="fade-down-left">Next.js</h2>
                </div>
                <div className='space-y-2'>
                  <h2>Tailwind</h2>
                  <h2>CSS</h2>
                  <h2>Node.js</h2>
                </div>
              </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skils