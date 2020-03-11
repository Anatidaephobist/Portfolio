/* eslint-disable */
import React, { Fragment } from 'react';
import './App.css';

//clicking  'Joni Mustaniemi' resets all elements
document.addEventListener('click',event => {
  if(event.target.classList.contains("titleTop")) {
    let containers = document.querySelectorAll(".contentWrapper");
    let links = document.querySelectorAll(".projectLink");
    for (let i = 0; i < containers.length; i++) {
       if(containers[i].parentElement.classList.contains("activeElement")) {
         containers[i].classList.remove("activeElement");
         containers[i].classList.remove("borderActive");
         containers[i].classList.remove("activeContentContainer");
         let children = containers[i].children;
         let images = document.querySelectorAll(".projectImage");
         console.log(images);
         for (let i = 0; i < images.length; i++) {
           images[i].classList.add("opacity-0");
         }
         for (let i = 0; i < children.length; i++) {
          children[i].classList.add("opacity-0");
         }
       }
     }

     for (let i = 0; i < links.length; i++) {
      links[i].classList.add("opacity-0");
     }
    let elements = document.querySelectorAll(".projectButton");
    let myName = document.querySelectorAll(".myName");
    myName[0].classList.remove("titleTop");
    for (let i = 0; i < elements.length; i++) {
       elements[i].classList.remove("activeElement");
       elements[i].classList.remove("moveDown");
    }
  }
 });

 //project name references for easy maintenance in the future
  const projectDatachannel = "Chat Demo";
  const projectAudio = "Audio Demo";
  const projectScreen = "Screen Demo";

 function ProjectItem({name, content, projectImage, project}) {
   const getElement = (event) => {  
  //get clicked element
 const node = myRef.current;
 const content = contentRef.current; 
 //display project content divs
 setTimeout(function(){
  content.classList.remove("opacity-0");
}, 700);
 handleContent(node.id);
if(node.style.opacity) {
    return;
}
let projectContainer = node.children[2].children[1];
projectContainer.classList.remove("opacity-0");
//select image container
let nodeChildren = node.children[2].children[1];
//select image
let image = nodeChildren.children[0];
    setTimeout(function(){
      image.classList.remove("opacity-0");
  }, 700);

//move name to the top and other than clicked element to the bottom of the screen and close all elements belonging to them
let elements = document.querySelectorAll(".projectButton");
let myName = document.querySelectorAll(".myName");
for (let i = 0; i < myName.length; i++) {
myName[i].classList.add("titleTop");
  
}
 for (let i = 0; i < elements.length; i++) {
    elements[i].classList.add("moveDown");
  if(elements[i].classList.contains("activeElement")) {
    closeElement(elements[i]);
  }
 }
 //display contents of the clicked element based on id attribute
  displayContent(node, content); 
   }
   var myRef = React.createRef();
   var contentRef = React.createRef();
    return(
      <Fragment>
          <div className="projectLink opacity-0" id="datachannel"> <a target="_blank" href="https://gifted-heyrovsky-8b6bb3.netlify.com">Kokeile Projektia täällä!</a></div>
          <div className="projectLink opacity-0" id="mediastream-audio"> <a target="_blank" href="https://focused-bardeen-4cb1a8.netlify.com">Kokeile Projektia täällä!</a></div>
          <div className="projectLink opacity-0" id="mediastream-screen"> <a target="_blank" href="https://suspicious-hopper-0e7114.netlify.com">Kokeile Projektia täällä!</a></div>
         
        <div onClick={() => getElement({name})} ref={myRef} className="projectButton" id={name}>
        <h2 id={project} className="projectName">{name}</h2>
        <h3 className="projectTitle">{name}</h3>
        <div className="contentWrapper">
         <div ref={contentRef} className="content opacity-0">{content}</div>
         <div className="projectContainer">
         <img src={projectImage} className="projectImage opacity-0"></img>
         </div>
        </div>
      </div>
      </Fragment>
    );
}

function handleContent(id) {
  if(id == projectDatachannel) {
    let link = document.getElementById("datachannel");
    setTimeout(function(){
      link.classList.remove("opacity-0");
  }, 700);
  }
  if( id == projectAudio) {
    let link = document.getElementById("mediastream-audio");
    setTimeout(function(){
      link.classList.remove("opacity-0");
  }, 700);
  }
  if( id == projectScreen) {
    let link = document.getElementById("mediastream-screen");
    setTimeout(function(){
      link.classList.remove("opacity-0");
  }, 700);
  }
}

function closeElement(element) {
 element.classList.remove("activeElement");
  if(element.id == projectDatachannel) {
  let link = document.getElementById("datachannel");
  link.classList.add("opacity-0");
  }
  if(element.id == projectAudio) {
    let link = document.getElementById("mediastream-audio");
    link.classList.add("opacity-0");
  }
  if(element.id == projectScreen) {
    let link = document.getElementById("mediastream-screen");
    link.classList.add("opacity-0");
  }

  let children = element.children;
  for (let i = 0; i < children.length; i++) {
    if(children[i].classList.contains("activeContentContainer") && children[i].classList.contains("activeContentContainer")) {
      children[i].classList.remove("activeContentContainer");
      children[i].classList.remove("borderActive");
      let grandchildren = children[i].children;
      for (let i = 0; i < grandchildren.length; i++) {
       if(grandchildren[i].classList == "projectContainer") {
         if(grandchildren[i].children[0].classList == "projectImage") {
           //image
           grandchildren[i].children[0].classList.add("opacity-0");
         }
       }
      }
    }
  }
 let projectContainers = document.querySelectorAll(".projectContainer");
 for (let i = 0; i < projectContainers.length; i++) {
  if(projectContainers[i].parentElement.classList.contains("activeElement")) {
  projectContainers[i].classList.add("opacity-0");
}
}
}

function displayContent(element, content) {
element.classList.remove("moveDown");
element.classList.add("activeElement");
getContent(element);
}

function getContent(element) {
  let wrappers = document.querySelectorAll(".contentWrapper");
  let projectContainers = document.querySelectorAll(".projectContainer");
 
  for (let i = 0; i < wrappers.length; i++) {
    if(wrappers[i].parentElement.classList.contains("activeElement")) {
      wrappers[i].classList.add("activeContentContainer");
      wrappers[i].classList.add("borderActive");
    }
  }
  for (let i = 0; i < projectContainers.length; i++) {
   if(projectContainers[i].parentElement.classList.contains("activeContentContainer")) {
    projectContainers[i].classList.remove("display-none");
   }
}
}
//get appropriate project info
function GetContentProject(props) {
  if(props.project === "Audio") {
    return <p>TypeScriptillä toteutettu demoprojekti WebRTC:n MediaStream ohjelmointirajapinnasta. Mahdollistaa äänen jakamisen kahden asiakkaan välillä. Selaintuki:  Google Chrome </p>
  }
  if(props.project === "Screensharing") {
    return <p>TypeScriptillä toteutettu demoprojekti WebRTC:n MediaStream ohjelmointirajapinnasta. Mahdollistaa ruudun jakamisen kahden asiakkaan välillä. Selaintuki:  Google Chrome </p>
}

if(props.project === "Datachannel") {
   return <p>TypeScriptillä toteutettu demoprojekti WebRTC:n Datachannel ohjelmointirajapinnasta. Mahdollistaa viestien jakamisen kahden asiakkaan välillä. Selaintuki:  Google Chrome </p>
}
  }
  export {
    ProjectItem,
    GetContentProject,
  };
