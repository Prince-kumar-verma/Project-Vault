// Example: Dynamically render featured projects (could be replaced with API or tags in the future)

const featuredProjects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One, highlighting its features and why it's featured.",
    url: "https://github.com/example/project-one"
  },
  {
    title: "Project Two",
    description:
      "This is another top pick, chosen for its popularity and contributions.",
    url: "https://github.com/example/project-two"
  },
  // Add more featured projects as needed
];

// Renders featured projects into the #featured-projects section
function renderFeaturedProjects() {
  const container = document.querySelector('.featured-projects-container');
  if (!container) return;

  container.innerHTML = ''; // Clear previous

  featuredProjects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'featured-project-card';

    card.innerHTML = `
      <span class="featured-badge">🌟 Featured</span>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.url}" target="_blank" class="featured-link">View Project</a>
    `;
    container.appendChild(card);
  });
}

// Optional: Call this if you want to render dynamically instead of hardcoding cards in HTML
// document.addEventListener('DOMContentLoaded', renderFeaturedProjects);