import React from 'react'
import { items } from '../utils/projects';

const Projects = () => {
    return (
      <>
        <div id='myProjects' className="flex justify-center min-[675px]:px-24 mx-4 my-4 max-[950px]:flex-col max-[550px]:px-4 gap-6 rounded-md py-3  ">
          <div className="flex flex-col rounded-md shadow-shadow p-4 ">
            <p>
              Currently I am learning in the field of full stack development and
              eager to kickstart a very good beginning of this field . I have made
              a collection of my works and these are illustrated here . You can
              run these in your own device just one click
            </p>
            <div className="flex flex-wrap gap-4 justify-between  my-4 mx-2">
              {items.map(({ id, name, src, image, description }) => (
                <ProjectsCard
                  name={name}
                  src={src}
                  image={image}
                  description={description}
                  key={id}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };

const ProjectsCard = ({ name, image, description, src }) => {
  return (
    <div className=" max-w-[320px] p-4 shadow-shadow rounded-md text-black bg-blue-100 hover:scale-105 duration-200 animate-bgChange" >
      <a href={src} target="_blank" className="">
        <img src={image} alt={name} className="w-full rounded-md" />
      </a>
      <h1 className="text-2xl font-medium my-1">{name}</h1>
      <p className="">{description}</p>
    </div>
  )
}



export default Projects