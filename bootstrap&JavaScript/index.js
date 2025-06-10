
let skills = ["JavaScript |"," HTML5 |","CSS3 |","ES6 |","React |","Bootstrap|","Node.js|","SQL|","Git |","Agile Project Management |", "WordPress " 
];
let skillsUpdate = document.getElementById("skills");

const continueUpSkills = skills.map((skill)=>{
        return  skill
});
skillsUpdate.innerHTML = continueUpSkills.slice(0,8).join(' ');

const projects=[
    {
    id:1,
    img:"../img/projects/deonaf.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:2,
    img:"./img/projects/hair.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:3,
    img:"./img/projects/procure.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:4,
    img:"./img/projects/New Logo 2B.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    }
];
let ProjectsFront = document.getElementById("projectsSample");


const cards = projects.map(project => {

  return `

    <div class="project-card p-5 col-md-3">

      <img   

        src="${project.img}"        

        alt="${project.title}"        

        class="project-card__image card-img-top"

      />

      <h3 class="project-card__title card-title">${project.title}</h3>

      <p class="project-card__desc card-body border">${project.description}</p>

      <p class="project-card__skills card-text">

        ${project.projectSkills}

      </p>

    </div>

  `;

});
ProjectsFront.innerHTML = cards.slice(0,4).join(' ');


