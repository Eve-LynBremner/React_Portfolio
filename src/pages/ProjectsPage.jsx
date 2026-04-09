// ProjectsPage.js
import React from 'react';

import ChromaGrid from '../components/ChromaGrid';

import react_portfolio from '../assets/react_portfolio.png';
import tech_blog from '../assets/tech_blog.png';
// import car_quiz_site from '../assets/car_quiz_site.png';
// import notes_application from '../assets/notes_application.png';
// import read_me_generator from '../assets/read_me_generator.png';
// import country_info from '../assets/country_info.png';
// import to_do_list from '../assets/to_do_list.png';
// import first_web_page from '../assets/first_web_page.png';
// import multi_page_responsive from '../assets/multi_page_responsive.png';
// import migrate_bootstrap from '../assets/migrate_bootstrap.png';

const items = [
    {
      image: react_portfolio,
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg, #10B981, #000)',
      url: 'https://github.com/Eve-LynBremner/React_Portfolio'
    },
    {
      image: tech_blog,
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg, #F59E0B, #000)',
      url: 'https://github.com/Eve-LynBremner/Full_Stack_Tech_Blog_Application'
    },
    {
      image: car_quiz_site,
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg, #EF4444, #000)',
      url: 'https://github.com/Eve-LynBremner/Quiz_Site_for_Car_Enthusiasts'
    },
    {
      image: notes_application,
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg, #8B5CF6, #000)',
      url: 'https://github.com/Eve-LynBremner/Full_Stack_Notes_Application'
    },
    {
      image: read_me_generator,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/Python_README_file_generator'
    },
    {
      image: country_info,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/Country_Info_App'
    },
    {
      image: to_do_list,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/Interactive_ToDo_List'
    },
    {
      image: first_web_page,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/My_First_Web_Page'
    },
    {
      image: multi_page_responsive,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/My_First_Multi_Page_Responsive_Website'
    },
    {
      image: migrate_bootstrap,
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg, #06B6D4, #000)',
      url: 'https://github.com/Eve-LynBremner/Migrating_My_Website_To_Bootstrap'
    }
  ];

const ProjectsPage = () => {
  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <ChromaGrid 
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default ProjectsPage;
