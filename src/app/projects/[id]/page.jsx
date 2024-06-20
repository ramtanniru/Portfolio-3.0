"use client"
import { useParams } from 'next/navigation';
import { projectDesc } from '../../../../utils/data';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ProjectPage = () => {
  const { id } = useParams();

  const project = projectDesc.find(project => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center bg-[#F0F2F5] dark:bg-black md:mt-0 md:mb-0">
      <div className='w-full'>
        <main className="flex flex-col gap-10 justify-center items-center mt-30 mb-30 mx-7 md:mt-50 md:mb-30 md:mx-30">
            <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  y: -20,
                  },
                  visible: {
                  opacity: 1,
                  y: 0,
                  },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:justify-between items-start w-full"
              >
                <div className='flex flex-col justify-start items-start gap-3'>
                  <h4 className='text_gradient text-[24px] font-bold'>{project.type}</h4>
                  <h1 className='text-[40px] text-black dark:text-white font-bold'>{project.title}</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-start gap-20'>
                  {
                    Object.keys(project.tech).map((key) => {
                      return (
                      <div className='flex flex-col justify-start items-start gap-3' key={key}>
                        <h6 className='text_gradient text-[20px] font-semibold'>{key}</h6>
                        <div className='flex flex-col justify-start items-start gap-2'>
                          {project.tech[key].map((tech) => {
                            return (
                            <p className='text-black dark:text-white text-[24px] font-semibold' key={tech}>{tech}</p>
                            )})}
                        </div>
                      </div>
                    )})
                  }
                </div>
            </motion.div>

            <div className='w-full my-5 rounded-md overflow-hidden'>
              <Image src={project.src} height={1000} width={2000} alt='project image' loading='lazy'/>
            </div>

            <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  y: -20,
                  },
                  visible: {
                  opacity: 1,
                  y: 0,
                  },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:justify-between items-start w-full"
              >
                <div className='flex flex-col justify-start items-start gap-3 w-full md:w-4/12'>
                  <h4 className='text_gradient text-[20px] font-bold uppercase'>About the project</h4>
                  <h1 className='text-[36px] text-black dark:text-white font-bold'>{project.about}</h1>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-start gap-20 w-full md:w-7/12'>
                  <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Libero dignissimos iure hic delectus nobis itaque minima quidem voluptatibus.
                      Porro beatae magni iure eveniet eaque repellat quaerat suscipit laboriosam possimus quo.
                  </p>
                </div>
              </motion.div>

              <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  y: -20,
                  },
                  visible: {
                  opacity: 1,
                  y: 0,
                  },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 md:justify-center items-start w-10/12 my-10"
              >
                <div className='flex justify-start items-start gap-3 w-full'>
                  <h1 className='text-black dark:text-white text-[40px] font-bold uppercase'>Problem<br/>Statement</h1>
                </div>
                <div className='flex justify-center items-start gap-20 w-full'>
                  <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Libero dignissimos iure hic delectus nobis itaque minima quidem voluptatibus.
                      Porro beatae magni iure eveniet eaque repellat quaerat suscipit laboriosam possimus quo.
                  </p>
                </div>
                <div className='w-full rounded-md overflow-hidden'>
                  <Image src={project.src} height={1000} width={1000} alt='problem image'/>
                </div>
              </motion.div>

              <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  y: -20,
                  },
                  visible: {
                  opacity: 1,
                  y: 0,
                  },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 md:justify-center items-start w-10/12 my-10"
              >
                <div className='flex justify-start items-start gap-3 w-full'>
                  <h1 className='text-black dark:text-white text-[40px] font-bold uppercase'>The Solution</h1>
                </div>
                <div className='flex justify-center items-start gap-20 w-full'>
                  <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Libero dignissimos iure hic delectus nobis itaque minima quidem voluptatibus.
                      Porro beatae magni iure eveniet eaque repellat quaerat suscipit laboriosam possimus quo.
                  </p>
                </div>
                <div className='w-full rounded-md overflow-hidden'>
                  <Image src={project.src} height={1000} width={1000} alt='problem image'/>
                </div>
              </motion.div>
              
              <motion.div
              variants={{
                  hidden: {
                  opacity: 0,
                  y: -20,
                  },
                  visible: {
                  opacity: 1,
                  y: 0,
                  },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10 md:justify-center items-start w-full mt-10"
              >
                <h1 className='text-black dark:text-white font-bold text-3xl md:text-[36px] leading-tight'>
                  Witness the project with the below deployment link.<br/>
                  <span>
                    <a className='text-3xl md:text-[36px] underline underline-offset-[20px] text_gradient'>
                      View Demo {`->`}
                    </a>
                  </span>
                </h1>
              </motion.div>

              <div className='grid grid-cols-4 grid-rows-2 gap-5 w-full h-[500px]'>
                <div className='col-span-2 row-span-2 bg-white'>
                  <Image src={project.images[0]} width={1000} height={1000} alt='project image'/>
                </div>
                <div className='col-span-1 row-span-1 bg-white'></div>
                <div className='col-span-1 row-span-1 bg-white'></div>
                <div className='col-span-1 row-span-1 bg-white'></div>
                <div className='col-span-1 row-span-1 bg-white'></div>
              </div>

        </main>
      </div>
    </div>
  );
};

export default ProjectPage;
