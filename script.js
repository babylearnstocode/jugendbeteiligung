document.addEventListener("DOMContentLoaded", function () {
  var trackedElements = document.querySelectorAll("[data-track]");
  var ideaForm = document.getElementById("ideaForm");
  var successMessage = document.getElementById("formSuccess");
  var activeIdeaCard = document.querySelector('[data-active-card="true"]');
  var deadCards = document.querySelectorAll(".dead-card");
  var navLinks = document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .btn");
  var navbarCollapse = document.getElementById("mainNav");

  trackedElements.forEach(function (element) {
    element.addEventListener("click", function () {
      console.log("Clarity demo click:", element.dataset.track);
    });
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
      }
    });
  });

  if (ideaForm) {
    ideaForm.addEventListener("submit", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (!ideaForm.checkValidity()) {
        ideaForm.classList.add("was-validated");
        console.log("Clarity demo form validation failed");
        return;
      }

      ideaForm.classList.add("was-validated");
      successMessage.classList.remove("d-none");
      successMessage.scrollIntoView({ behavior: "smooth", block: "center" });
      console.log("Clarity demo form submitted successfully");
    });

    ideaForm.addEventListener("reset", function () {
      ideaForm.classList.remove("was-validated");
      successMessage.classList.add("d-none");
      console.log("Clarity demo form reset");
    });
  }

  if (activeIdeaCard) {
    activeIdeaCard.addEventListener("click", showIdeaDetails);
    activeIdeaCard.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showIdeaDetails();
      }
    });
  }

  deadCards.forEach(function (card) {
    card.addEventListener("click", function () {
      console.log("Clarity demo dead click card:", card.querySelector("h3").textContent);
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        console.log("Clarity demo keyboard dead click card:", card.querySelector("h3").textContent);
      }
    });
  });

  function showIdeaDetails() {
    console.log("Clarity demo active idea card clicked: Neuer Basketballplatz");
    alert("Demo: Details zum Vorschlag 'Neuer Basketballplatz' wuerden hier geoeffnet.");
  }
});
