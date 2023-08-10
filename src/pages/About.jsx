import React from 'react';
import {Link} from 'react-router-dom'
import './About.css'


const About = () => {
  return <div className='about'>
    <h1> Welcome to the Recipe App! </h1>
    <p> This web application allows users to view a list of recipes on the homepage, click on a specific recipe to view its details, add reviews, and rate the recipes. Users can also add new reviews, and update, and delete existing reviews.</p>
    
    <h2>Collaborators<p>click Collaborator's name to see git hub page!</p></h2>
   <span>
    <aside>
   <ul>
    <li> <Link to={"https://github.com/Amina-Moufakkir"}>Amina Moufakkir</Link> </li>
    <li> <Link to={"https://github.com/yanakolajara"}> Yanako Lajara</Link> </li>
    <li> <Link to={"https://github.com/Thandisb"}>Thandi Bristol</Link> </li>
    </ul>
    </aside>
    <aside>
    <h2>Features</h2>
    <ul>
      <li>Display a list of recipes on the homepage</li>
      <li>View a single recipe with ingredients, description, and nutrition facts</li>
      <li> Add reviews and rate recipes</li>
      <li>Search functionality to find specific recipes</li>
    </ul>
    </aside>
    </span>
  </div>;
};

export default About;
