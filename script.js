//Create company object

const ourCompany = {
    name: "Beyond Borders",
    companyType: "Travel Agency",
    culture: "Clan",
    employeeCount: 20,
    'British Values' : ["Democracy", "The rule of law", "Individual liberty", "Mutual respect", "Tolerance of those with different faiths and beliefs"],
    foundedYear: 2025,
    jobRoles: [
        {
            title: "Software Engineer",
            description: "Develop and maintain web applications, connecting back-end to front-end.",
            skillsRequired: ["JavaScript", "React", "Node.js"],
        },
        {
            title: "Travel Consultant",
            description: "Assist clients in planning and booking their travel itineraries.",
            skillsRequired: ["Customer Service", "Attention to Detail", "Knowledge of Travel Destinations"],

        },
        {
            title: "Marketing Specialist",
            description: "Create and implement marketing strategies to promote the company.",
            skillsRequired: ["SEO", "Content Creation", "Social Media Management"],
        },
        {
            title: "Web Designer",
            description: "Design user-friendly and visually appealing websites.",
            skillsRequired: ["HTML", "CSS", "Graphic Design"],
        }
    ],
    headquartersLocation: "Brighton, UK",
    addJobRole: function(title, description, skillsRequired) {
        this.jobRoles.push({
            title: title,
            description: description,
            skillsRequired: skillsRequired
        });
    }
}

// View roles button functionality with innerHTML
document.getElementById("view-roles-btn").addEventListener("click", function() { 
    const jobsDiv = document.getElementById("job-roles");
    jobsDiv.innerHTML = ""; // Clear previous content
    jobsDiv.style.display = "block"; 
    ourCompany.jobRoles.forEach(role => {
        const title = document.createElement("h2");
        title.textContent = role.title;
        const description = document.createElement("p");
        description.textContent = role.description;
        const skillsHeading = document.createElement("h3");
        skillsHeading.textContent = "Skills Required:";
        const skills = document.createElement("ul");    
        role.skillsRequired.forEach(skill => {
            const skillItem = document.createElement("li");
            skillItem.textContent = skill;
            skills.appendChild(skillItem);
        });
        jobsDiv.appendChild(title);
        jobsDiv.appendChild(description);
        jobsDiv.appendChild(skillsHeading);
        jobsDiv.appendChild(skills);
    });
});

    


// Add job role button functionality
document.getElementById("addJobRoleBtn").addEventListener("click", function() {
    const title = prompt("Enter job title:");
    const description = prompt("Enter job description:");
    const skills = prompt("Enter required skills (comma separated):").split(",").map(skill => skill.trim());
    ourCompany.addJobRole(title, description, skills);
    alert("Job role added successfully!");
});

// Display company info button functionality