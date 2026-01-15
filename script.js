
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});



 function toggleMoreInfo() {
   const moreInfo = document.getElementById("more-info");
   const button = event.target;
   if (moreInfo.style.display === "none") {
     moreInfo.style.display = "block";
     button.textContent = "Show Less";
   } else {
     moreInfo.style.display = "none";
    button.textContent = "Read More";
   }
 }
 var typed = new Typed(".text", {
   strings: ["Frontend developer", "Youtuber", "Web Developer", "Grapic designer "],
   typeSpeed: 100,
   backSpeed: 100,
   backDelay: 1000,
   loop: true
 });

  document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.transform = `
        translateY(-6px)
        rotateX(${(y - rect.height / 2) / 30}deg)
        rotateY(${-(x - rect.width / 2) / 30}deg)
      `;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
  });



  document.querySelector('.back-top').addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });  const sideTopBtn = document.querySelector('.side-top-btn');

  // Show button after scrolling
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      sideTopBtn.style.opacity = '1';
      sideTopBtn.style.pointerEvents = 'auto';
    } else {
      sideTopBtn.style.opacity = '0';
      sideTopBtn.style.pointerEvents = 'none';
    }
  });

  // Scroll to top
  sideTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

// Animate cards when scrolling
const cards = document.querySelectorAll('.highlights-cards .card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.3 });

cards.forEach(card => observer.observe(card));
