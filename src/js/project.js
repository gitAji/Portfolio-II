
  const projectsArray = [
    {
      "id": 1,
      "title": "A Social Media Site",
      "description": "A functional Social media site with user registration and post management functionality.",
      "image": "./img/Fakebook.png",
      "requirements": [
        "User with @noroff.no or @stud.noroff.no email can register profile",
        "Registered user can login",
        "User can view a post content feed",
        "User can filter the post content feed",
        "User can search the post content feed",
        "User can view a post content item by ID",
        "User can create a post content item",
        "User can update a post content item",
        "User can delete a post content item"],
      "deliverables": ["Project Plan", "Wireframe","Live Site"],
      "technologies": ["HTML", "CSS", "JavaScript"],
      "tools": ["Figma", "VSCode", "Netlify","GitHub Project"],
      "github_link": "https://github.com/gitAji/Social-Media-JS/tree/JS2",
      "live_demo": "https://fakebook-js2.netlify.app/"
    },
    {
      "id": 2,
      "title": "Portfolio version 1.0",
      "description": "A portfolio site to show the projects are build during the semester one.",
      "image": "./img/Portfolio.png",
      "requirements": ["Well structured", "User Friendly", "Nice Design"],
      "deliverables": ["Fully designed and developed site", "3 Portfolios"],
      "technologies": ["HTML", "CSS", "JavaScript"],
      "tools": ["Figma", "VSCode", "Netlify"],
      "github_link": "https://github.com/gitAji/Personal-site",
      "live_demo": "https://ajee.netlify.app/"
    },
    {
      "id": 3,
      "title": "iBuy",
      "description": "A biding site where users get credit on registration and able to bid on listings and post listing.",
      "image": "./img/ibuy.png",
      "requirements": ["API integration", "User Registration System", "Listings","Edit Avatar","Search Function "],
      "deliverables": ["A Gantt chart for project timing","A design prototype","A style guide","A kanban project board","Live Site"],
      "technologies": ["HTML", "CSS", "JavaScript" ],
      "tools": ["Figma", "VSCode", "Netlify"],
      "github_link": "https://github.com/gitAji/Project-II",
      "live_demo": "https://i-buy.netlify.app/"
    }];



const projectModal = document.getElementById("project-modal");



const viewBtn = document.querySelectorAll("button[id='view']");
console.log(viewBtn);
viewBtn.forEach( button => {
  button.addEventListener("click", function(e){
    modalReact(e.target);
  });
});

function modalReact(button) {
  let modal = document.querySelector(".fixed");
    modal.classList.toggle("hidden");
  loadData(button);
}



const x = document.getElementById("box");
x.addEventListener("click", modalReact);

function loadData(button) {
    const projectId = button.dataset.projectId;
    const pro = projectsArray.find(project => project.id == projectId);
    projectModal.innerHTML = `
    <div class="text-bg-black text-lg uppercase underline mb-4">
   ${pro.title}
    </div>
    <div class="mb-2"><b>Description:</b>${pro.description}</div>
    <div class="mb-2"><b>Requirements:</b> ${pro.requirements}</div>
    <div class="mb-2"><b>Deliverables:</b> ${pro.deliverables}</div>
    <div class="mb-2"><b>Technologies:</b> ${pro.technologies}</div>
    <div class="mb-2"><b>Tools:</b> ${pro.tools}</div>
    <div class="mb-2"><img class="dark:grayscale object-cover max-md:" src="${pro.image}">    </div>
    <div class="mb-2">
    <a href="${pro.live_demo}" target="_blank"> <input type="button" value="Live Demo" class="bg-gray-300 p-4  cursor-pointer hover:bg-black hover:text-white" /></a>
    <a href="${pro.github_link}" target="_blank"> <input type="button" value="GitHub" class="bg-gray-300 p-4  cursor-pointer hover:bg-black hover:text-white"" /></a>
    </div>
    `;
}