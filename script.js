const modal = document.getElementById("image-modal");
const cloudImage = document.getElementById("cloud-image");
const applicationImage = document.getElementById("application-image");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

cloudImage.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

applicationImage.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
};

closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  console.log("%cHi Dev! 👋", "color: #38bdf8; font-size: 16px;");
  console.log("This portfolio was created by Kleber Nunes Inacio 🚀");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  
  document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
  });
  