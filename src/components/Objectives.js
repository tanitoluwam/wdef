import React from 'react';
import StarIcon from '@mui/icons-material/Star';

export const Objectives = () =>
{
  const listItems = [
    "Bridge the Digital Divide: Provide digital inclusion for youth in residential care facilities and community programs, enhancing their access to technology and digital education in the tech field",
    "Empower with Tech Education: Equip youth with foundational tech skills and knowledge to prepare them for future careers in the technology sector.",
    "Distribute Laptops: Supply laptops preloaded with relevant educational content and software, ensuring youth have the tools to practice and learn.",
    "Inspire and Mentor: Conduct workshops, interactive sessions, and ongoing mentorship to motivate and guide youth in exploring tech careers.",
    "Ensure Long-Term Impact: Establish partnerships, create sustainable learning systems, and foster community collaboration to maintain and enhance the initiative's impact over time."
  ];

  return (
    <section className='mt-14  py-10'>
      <div className='container mx-auto py-10 flex justify-center flex-col items-center'>
        <div className='text-center mb-4'>
          <h3 className='text-[#8F8F8F] font-extrabold mb-4'>
            Objectives
          </h3>
          <h3 className='text-[#333333] font-bold text-3xl leading-10 mb-6'>
            What we are known for in <br /> transforming youth
          </h3>
        </div>
        <div>
          <ul className="list-none">
            {listItems.map( ( item, index ) => (
              <li key={index} className="flex items-start mb-2 leading-8">
                <StarIcon className="w-5 h-5 text-[#EC635D] mr-2 mt-2" />
                <span className='text-[#7B7B7B]'>
                  {item}
                </span>
              </li>
            ) )}
          </ul>
        </div>

      </div>
    </section>
  );
};
