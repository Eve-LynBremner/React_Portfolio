// HomePage.js
import React from 'react';

import profile_pic from '../assets/profile_pic.jpg';
import styles from './HomePage.module.css';

import RepoLoop from '../components/RepoLoop';


// adding the logo loop from react bits but inserting github repos
const HomePage = () => {
  return (
    <div>
      <div className={styles.container}>
        <img className={styles.image} src={profile_pic} alt="profile pic" />
      </div>
      <div className={styles.loopcontainer}>
        <RepoLoop
          repos={myRepos}
          speed={70}
          direction="down"
          logoHeight={70}
          gap={60}
          hoverSpeed={0}
          useCustomRender={false}
        />
      </div>
    </div>
  );
};

export default HomePage;