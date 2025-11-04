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
const roleInput = document.getElementById("role");
const descriptionInput = document.getElementById("description");
const skillsInput = document.getElementById("skills");
const addJobRoleBtn = document.getElementById("addJobRoleBtn");

addJobRoleBtn.addEventListener("click", function() {
    const role = roleInput.value;
    const description = descriptionInput.value;
    const skills = skillsInput.value.split(",").map(skill => skill.trim());

    if (!role || !description || skills.length === 0) {
        alert("Please enter both a job role, description and required skills.");
        return;
    }

    ourCompany.addJobRole(role, description, skills);

    // Clear the inputs
    roleInput.value = "";
    descriptionInput.value = "";
    skillsInput.value = "";

    //Refresh the job roles display if it's visible
    document.getElementById("view-roles-btn").click();
});

