"use client"
import { useParams } from 'next/navigation';
import { projectDesc } from '../../../../utils/data';


const ProjectPage = () => {
  const { id } = useParams();

  const project = projectDesc.find(project => project.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1>{project.title}</h1>
      <p>{project.about}</p>
    </div>
  );
};

export default ProjectPage;
