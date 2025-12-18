document.getElementById("startBtn").addEventListener("click", () => {
  alert("Redirecting to resume builder form...");
  // You can redirect like this:
  // window.location.href = "#resume-form";
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.getElementById("heroBtn").addEventListener("click", () => {
  alert("Taking you to the resume form...");
  // window.location.href = "#resume-form";
});

document.querySelectorAll('.feature-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    console.log(`Hovered on: ${card.querySelector('h3').innerText}`);
  });
});

document.querySelectorAll('.how-step').forEach(step => {
  step.addEventListener('mouseenter', () => {
    console.log(`Step hovered: ${step.querySelector('h3').innerText}`);
  });
});

document.getElementById("resumeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;

  console.log("Resume Data:", {
    name,
    email,
    jobTitle,
    skills,
    education,
    experience
  });

  alert("Resume data collected. Proceed to preview or download.");
});

// Live update fields
function updatePreview(id, previewId) {
  document.getElementById(id).addEventListener("input", function () {
    document.getElementById(previewId).textContent = this.value || defaultValues[previewId];
  });
}

// Default text for empty inputs
const defaultValues = {
  previewName: "Your Name",
  previewEmail: "you@example.com",
  previewJob: "Job Title",
  previewSkills: "HTML, CSS, JavaScript",
  previewEducation: "BSc in Computer Science, XYZ University",
  previewExperience: "2 years at ABC Corp as a Web Developer"
};

// Link each form field to preview field
updatePreview("name", "previewName");
updatePreview("email", "previewEmail");
updatePreview("jobTitle", "previewJob");
updatePreview("skills", "previewSkills");
updatePreview("education", "previewEducation");
updatePreview("experience", "previewExperience");

function applyTemplate(templateClass) {
  const preview = document.getElementById("resumePreview");

  // Remove any existing template classes
  preview.classList.remove("template1", "template2", "template3");

  // Add the selected one
  preview.classList.add(templateClass);

  console.log(`Template applied: ${templateClass}`);
}

document.getElementById("downloadBtn").addEventListener("click", function () {
  const element = document.getElementById("resumePreview");

  const opt = {
    margin: 0.5,
    filename: 'My_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
});

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Thanks for contacting us! We'll get back to you soon.");
  this.reset(); // Clear form
});
