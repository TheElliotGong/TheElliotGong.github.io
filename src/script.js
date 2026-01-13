import projectDate from "./data/projects.json" assert { type: "json" };
import employmentData from "./data/employment.json" assert { type: "json" };
import {Project} from "./components.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.querySelector(".email-link");
  const encodedEmail = "dGhlZWxsaW90Z29uZ0Bob3RtYWlsLmNvbQ=="; // Base64 encoded email
  const decodedEmail = atob(encodedEmail); // Decode the email
  emailLink.href = `mailto:${decodedEmail}`;

  //Create fields using nav elements.
  const burgerIcon = document.querySelector("#burger");
  const navbarMenu = document.querySelector("#nav-links");
  //Show/hide the navbar menu when the burger icon is clicked. 
  burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
  });

  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
    // ...existing code...
  }

  // Initial setup based on current screen width
  setupCollapsibles();

  // Re-check whenever the window is resized
  window.addEventListener("resize", setupCollapsibles);

  loadProjects();

  // projectData["web-apps"].forEach(project => {
    
  // });
});

// ...existing code...
function createProjectElement(project, parentContainer) {
  if (!project || !parentContainer) return;

  const projectDiv = document.createElement("div");
  projectDiv.className = "project column is-full-mobile is-half-tablet is-one-third-desktop is-one-quarter-widescreen";

  // Create a stable ID from provided id or name
  const makeSlug = (s) =>
    String(s || "project")
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^\w\-]/g, "");
  projectDiv.id = makeSlug(project.id || project.name);

  // Title
  const title = document.createElement("h4");
  title.className = "has-text-weight-bold is-size-4";
  const year = project.year ?? project.description?.year;
  title.textContent = year ? `${project.name} (${year})` : (project.name || "");

  // Thumbnail: <a target="_blank"><img /></a> if link exists; else just <img> if only image exists
  let thumbEl = null;
  if (project.image) {
    const img = document.createElement("img");
    img.src = project.image.src;
    img.alt = project.image.alt || project.name || "";

    if (project.link) {
      const a = document.createElement("a");
      a.href = project.link;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.appendChild(img);
      thumbEl = a;
    } else {
      thumbEl = img;
    }
  } else if (project.link) {
    // Fallback: link without image
    const a = document.createElement("a");
    a.href = project.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    thumbEl = a;
  }

  // Details list
  const ul = document.createElement("ul");

  const appendLi = (label, value) => {
    if (value === undefined || value === null || value === "") return;
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = `${label}:`;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(` ${Array.isArray(value) ? value.join(", ") : value}`));
    ul.appendChild(li);
  };

  appendLi("About", project.description?.about);
  appendLi("What I did", project.description?.whatIDid ?? project.description?.role);
  appendLi("Team Size", project.description?.teamSize);
  appendLi(
    "Project Length",
    project.description?.projectLength ?? project.description?.length ?? project.description?.duration
  );
  appendLi("Tools", project.description?.tools);

  // Assemble and append in order
  projectDiv.appendChild(title);
  if (thumbEl) projectDiv.appendChild(thumbEl);
  projectDiv.appendChild(ul);

  parentContainer.appendChild(projectDiv);
}
// ...existing code...
//Show/hide the projects when the collapsible button(plus/minus symbol) is clicked.
//Only apply this functionality when screen width is 1023px or less
function setupCollapsibles() {
  if (window.innerWidth <= 1023) {
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].nextElementSibling.style.maxHeight = 0;
      // Remove old event listeners first (to prevent duplicates)
      coll[i].removeEventListener("click", toggleCollapsible);
      // Add new event listener
      coll[i].addEventListener("click", toggleCollapsible);
    }
  }
  else {
    // If the screen is wider than 1023px, remove collapsible functionality
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
      coll[i].removeEventListener("click", toggleCollapsible);
      // Reset styles
      coll[i].classList.remove("active");
      let content = coll[i].nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";

    }

  }
}
//Function to toggle the collapsible content
function toggleCollapsible() {
  this.classList.toggle("active");
  let content = this.nextElementSibling;
  if (content.style.maxHeight != 0 + "px") {
    content.style.maxHeight = 0;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }

}


function loadProjects() {
  // Fetch JSON directly (no build step)
  fetch("src/data/projects.json")
    .then((r) => r.json())
    .then((projectData) => {
      const items = projectData["web-apps"] || [];

      document.querySelectorAll(".testing").forEach((container) => {
        const root = ReactDOM.createRoot(container);

        const list = React.createElement(
          "div",
          { className: "columns is-multiline rows" },
          ...items.map((p, idx) =>
            React.createElement(Project, {
              key: `proj-${idx}`,
              name: p.name,
              link: p.link,
              image: p.image,
              description: p.description?.about,
              teamSize: p.description?.teamSize,
              role: p.description?.role,
              status: p.description?.status,
              tools: p.description?.tools,
            })
          )
        );

        root.render(list);
      });
    })
    .catch((err) => console.error("Failed to load projects.json", err));
}