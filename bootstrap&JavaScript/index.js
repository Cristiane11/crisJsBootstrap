
let skills = ["JavaScript |"," HTML5 |","CSS3 |","ES6 |","React |","Bootstrap|","Node.js|","SQL|","Git |","Agile Project Management |", "WordPress " 
];
let skillsUpdate = document.getElementById("skills");

const continueUpSkills = skills.map((skill)=>{
    return skill
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

const project = projects.map(({id,img,title,projectSkills,description})=>{
    return item;
});
const  projectCard = document.getElementById("projectsSample");
projectCard.innerHTML = project;