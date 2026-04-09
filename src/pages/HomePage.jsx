// HomePage.js
import React from 'react';

import profile_pic from '../assets/profile_pic.jpg';
import styles from './HomePage.module.css';

import RepoLoop from '../components/RepoLoop';

// require useState and useEffect to load data in React
import { useEffect, useState } from "react";

// adding the logo loop from react bits but inserting github repos
const HomePage = () => {
  // default state is empty array
  const [repos, setRepos] = useState([]);

  // fetch my repos and update the useState to reflect the array of repos
  useEffect(() => {
    fetch("https://api.github.com/users/Eve-LynBremner/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  // format required by logoloops for the repo array
  const myRepos = repos.map(repo => ({
    node: <span className={styles.repoLink} style={{color: '#ffffff'}}>{repo.name}</span>,
    title: repo.description,
    href: repo.html_url
  }));

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
          repoHeight={30}
          gap={60}
          hoverSpeed={5}
          useCustomRender={false}
        />
      </div>
    </div>
  );
};

export default HomePage;