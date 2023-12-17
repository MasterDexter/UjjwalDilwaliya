alert('Welcome To My Portfolio~~~~ Ujjwal')
function showProjectDetails(projectId) {
  const modal = document.getElementById(`${projectId}-modal`);
  modal.style.display = 'block';
}

function hideProjectDetails() {
  const modals = document.querySelectorAll('.project-modal');
  modals.forEach(modal => {
    modal.style.display = 'none';
  });
}
