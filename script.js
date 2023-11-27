let nav=document.createElement("div");
let container=document.createElement("div");
let navbar=document.createElement("div");
let start=document.createElement("div");
let ul=document.createElement("ul");
let section=document.createElement("section");
let allDiv=document.createElement("div");
let designDiv=document.createElement("div");
let h5Div=document.createElement("div");
let h5El=document.createElement("h5");
let getDiv=document.createElement("div");
let pEl=document.createElement("p");
let h1El=document.createElement("h1");
let btnDiv=document.createElement("div");
let resumeBtn=document.createElement("button");
let projectsBtn=document.createElement("button");
let imgDiv=document.createElement("div");
let colorDiv=document.createElement("div");
let imgEl=document.createElement("img");
let secondSection=document.createElement("section");
let aboutDiv=document.createElement("div");
let meDiv=document.createElement("div");
let h2El=document.createElement("h2");
let pEl1=document.createElement("p");
let pEl2=document.createElement("p");
let iconDiv=document.createElement("div");


let content=["Home", "Resume", "Projects", "Contact"]
for(i=0; i<=3; i++){
    let li=document.createElement("li");
    li.classList.add("li");
    li.innerText=content[i];
    ul.append(li);
}


nav.classList.add("nav");
container.classList.add("container");
navbar.classList.add("navbar");
start.classList.add("start");
ul.classList.add("ul");
section.classList.add("section");
allDiv.classList.add("all");
designDiv.classList.add("design");
h5Div.classList.add("h5");
getDiv.classList.add("get");
pEl.classList.add("p");
h1El.classList.add("h1");
btnDiv.classList.add("btndiv");
resumeBtn.classList.add("Btn1");
projectsBtn.classList.add("Btn2");
imgDiv.classList.add("imgdiv");
colorDiv.classList.add("color");
secondSection.classList.add("section");
aboutDiv.classList.add("about");
meDiv.classList.add("me");
h2El.classList.add("h2");
pEl1.classList.add("p2");
pEl2.classList.add("p3");


imgEl.setAttribute("src", "https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png");


document.body.append(nav);
nav.append(container);
container.append(navbar);
navbar.append(start, ul);
document.body.append(section);
section.append(container);
container.append(allDiv);
allDiv.append(designDiv, imgDiv);
designDiv.append(h5Div, getDiv, btnDiv);
h5Div.append(h5El);
getDiv.append(pEl, h1El,);
btnDiv.append(resumeBtn, projectsBtn);
imgDiv.append(colorDiv, imgEl);
document.body.append(secondSection);
secondSection.append(aboutDiv);
aboutDiv.append(meDiv);
meDiv.append(h2El, pEl1, pEl2,);


start.innerText="Start Bootstrap"
h5El.innerText="DESIGN · DEVELOPMENT · MARKETING"
pEl.innerText="I can help your business to"
h1El.innerText="Get online and grow fast"
resumeBtn.innerText="Resume"
projectsBtn.innerText="Projects"
h2El.innerText="About Me"
pEl1.innerText="My name is Start Bootstrap and I help brands grow."
pEl2.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?"
