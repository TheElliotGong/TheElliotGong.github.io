import { Project, Job } from "./components.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import projectData from "./data/projects.json" assert { type: "json" };

let projects = Object.values(projectData);
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



    // Initial setup based on current screen width
    setupCollapsibles();

    // Re-check whenever the window is resized
    window.addEventListener("resize", setupCollapsibles);

    loadProjects();
});

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
    let i = 0;
    document.querySelectorAll(".projectContent").forEach((container) => {
        const root = ReactDOM.createRoot(container);
        foreach((projectInfo) => {
            root.render(<Project
                name={projectInfo.name}
                link={projectInfo.link}
                image={projectInfo.image}
                description={projectInfo.description.about}
                teamSize={projectInfo.description.teamSize}
                role={projectInfo.description.role}
                status={projectInfo.description.status}
                tools={projectInfo.description.tools}
                 />
        );
    }
    );
})}