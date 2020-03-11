
import React from "react";
import './App.css';

import {ProjectItem, GetContentProject} from './projectItemLogic.js';

function Portfolio() {
  return(  
<div>
  
  <div className="text-align-center">
  <h1 className="myName" >Joni Mustaniemi</h1>
  <div className="projectWrapper">

   <ProjectItem name="Chat Demo" projectImage="./pics/datachannelDemo.png" content={<GetContentProject project="Datachannel"/>}/>
   <ProjectItem name="Audio Demo" projectImage="./pics/audioDemo.png" content={<GetContentProject project="Audio"/>}/>
   <ProjectItem name="Screen Demo" projectImage="./pics/screenDemo.png" content={<GetContentProject project="Screensharing"/>}/>

  </div>
  </div>
  
</div>

  );
}

export default Portfolio;