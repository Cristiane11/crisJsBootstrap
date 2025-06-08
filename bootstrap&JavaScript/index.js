
let skills = ["JavaScript |"," HTML5 |","CSS3 |","ES6 |","React |","Bootstrap|","Node.js|","SQL|","Git |","Agile Project Management |", "WordPress " 
];
let skillsUpdate = document.getElementById("skills");

const continueUpSkills = skills.map((skill)=>{
        return  skill
});
skillsUpdate.innerHTML = continueUpSkills.slice(0,8);

const projects=[
    {
    id:1,
    img:"./file.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:2,
    img:"./file.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:3,
    img:"./file.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"
    
    },
    {
    id:4,
    img:"./file.png",
    title:"Worpdress Website",
    projectSkills:"js, html, css,react",
    description:"wirtshoooiosssoosososodosof"

    }
];
let ProjectsFront = document.getElementById("projectsSample");
const proj = projects.map((project)=>{
   return project

})
ProjectsFront.innerHTML =proj.slice(0,4);

