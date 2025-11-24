const content = document.getElementById("content-area");
const sections = document.querySelectorAll(".action-card");

sections.forEach(card => {
  card.addEventListener("click", () => {
    const section = card.getAttribute("data-section");
    loadSection(section);
  });
});

function loadSection(section) {
  let html = "";

  switch (section) {
    case "post-job":
      html = `
        <h2>Post New Job</h2>
        <form id="jobForm">
          <label>Job Title</label>
          <input type="text" required placeholder="e.g. Frontend Developer" />

          <label>Location</label>
          <input type="text" placeholder="e.g. Chennai, India" />

          <label>Job Type</label>
          <select>
            <option>Full-Time</option>
            <option>Internship</option>
            <option>Part-Time</option>
          </select>

          <label>Description</label>
          <textarea rows="4" placeholder="Enter job description..."></textarea>

          <button type="submit">Post Job</button>
        </form>
      `;
      break;

    case "my-jobs":
      html = `
        <h2>My Jobs</h2>
        <div class="job-card">
          <h3>Frontend Developer</h3>
          <p>Location: Chennai</p>
          <p>Applications: 8</p>
        </div>
        <div class="job-card">
          <h3>Backend Engineer</h3>
          <p>Location: Bangalore</p>
          <p>Applications: 5</p>
        </div>
      `;
      break;

    case "applicants":
      html = `
        <h2>Applicants</h2>
        <div class="job-card">
          <h3>Priya Sharma</h3>
          <p>Applied for: Frontend Developer</p>
          <p>Skills: React, CSS, JavaScript</p>
        </div>
        <div class="job-card">
          <h3>Rahul Mehta</h3>
          <p>Applied for: Backend Engineer</p>
          <p>Skills: Node.js, Express, MongoDB</p>
        </div>
      `;
      break;

    case "interviews":
      html = `
        <h2>Scheduled Interviews</h2>
        <div class="job-card">
          <h3>Priya Sharma</h3>
          <p>Position: Frontend Developer</p>
          <p>Date: 2025-11-15</p>
        </div>
        <div class="job-card">
          <h3>Rahul Mehta</h3>
          <p>Position: Backend Engineer</p>
          <p>Date: 2025-11-17</p>
        </div>
      `;
      break;

    case "profile":
      html = `
        <h2>Company Profile</h2>
        <p><strong>Company Name:</strong> TechPath Solutions</p>
        <p><strong>Industry:</strong> Software Development</p>
        <p><strong>Location:</strong> Chennai, India</p>
        <p><strong>Email:</strong> hr@techpath.com</p>
      `;
      break;

    default:
      html = `
        <h2>Dashboard Overview</h2>
        <p>Welcome to your recruiter panel. Select an action above to get started.</p>
      `;
  }

  content.innerHTML = html;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("companyProfileForm");
  const message = document.getElementById("savedMessage");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // You can later connect this to backend
      message.style.display = "block";

      setTimeout(() => {
        message.style.display = "none";
      }, 3000);
    });
  }
});
