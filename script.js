document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================
     ROTATING HERO WORD
  ========================================== */

  const words = [
      "insight",
      "solutions",
      "predictions",
      "stories"
  ];

  const dynamicWord = document.getElementById("dynamic-word");

  if (dynamicWord) {

      let index = 0;

      setInterval(() => {

          dynamicWord.style.opacity = "0";

          setTimeout(() => {

              index = (index + 1) % words.length;

              dynamicWord.textContent = words[index];

              dynamicWord.style.opacity = "1";

          }, 350);

      }, 2800);

  }


  /* ==========================================
     NAVBAR ON SCROLL
  ========================================== */

  const navbar = document.querySelector(".navbar");

  function updateNavbar() {

      if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }

  }

  window.addEventListener("scroll", updateNavbar);

  updateNavbar();


  /* ==========================================
     SCROLL REVEAL
  ========================================== */

  const revealElements = document.querySelectorAll(
      ".section-label, .section-heading, .about-grid, " +
      ".personal-section, .experience-item, .featured-project, " +
      ".project-card, .skills-grid"
  );

  const observer = new IntersectionObserver(
      (entries) => {

          entries.forEach((entry) => {

              if (entry.isIntersecting) {

                  entry.target.style.opacity = "1";
                  entry.target.style.transform = "translateY(0)";

                  observer.unobserve(entry.target);

              }

          });

      },
      {
          threshold: 0.12
      }
  );


  revealElements.forEach((element) => {

      element.style.opacity = "0";
      element.style.transform = "translateY(25px)";
      element.style.transition =
          "opacity 0.8s ease, transform 0.8s ease";

      observer.observe(element);

  });


  /* ==========================================
     SMOOTH ANCHOR LINKS
  ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {

      anchor.addEventListener("click", function (event) {

          const target = document.querySelector(this.getAttribute("href"));

          if (!target) return;

          event.preventDefault();

          target.scrollIntoView({
              behavior: "smooth"
          });

      });

  });

});