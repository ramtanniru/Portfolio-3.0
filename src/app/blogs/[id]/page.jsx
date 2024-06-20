"use client"
import React from 'react'
import { useParams } from 'react-router-dom';
import { blogContent } from '../../../../utils/blogs';
const BlogPage = () => {
    const { id } = useParams();

    const blog = blogContent.find(project => project.id === parseInt(id));
  
    if (!blog) {
      return <p className='min-h-screen flex justify-center items-center'>Blog not found</p>;
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
              className="flex flex-col justify-center gap-10 w-full items-center"
              >
                <div>Blogs</div>
            </motion.div>
        </main>
      </div>
    </div>
    );
}

export default BlogPage