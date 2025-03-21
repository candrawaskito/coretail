("use strict");

(function () {
   // Menu toggle for admin dashboard
   var navToggle = document.getElementById("nav-toggle");
   var dbWrapper = document.getElementById("app-layout");

   if (navToggle) {
      navToggle.addEventListener("click", function (e) {
         e.preventDefault();
         if (dbWrapper) {
            dbWrapper.classList.toggle("toggled");
         }
      });
   }

   // Default Popover
   var popoverTriggers = document.querySelectorAll('[data-bs-toggle="popover"]');

   if (popoverTriggers.length) {
      popoverTriggers.forEach(function (popoverTriggerEl) {
         new Popover(popoverTriggerEl);
      });
   }

   // Scrollspy
   var scrollSpyElements = document.querySelectorAll('[data-bs-spy="scroll"]');

   if (scrollSpyElements.length) {
      scrollSpyElements.forEach(function (dataSpyEl) {
         new ScrollSpy(dataSpyEl).refresh();
      });
   }

   // Toast

   const toastTrigger = document.getElementById("liveToastBtn");
   const toastLiveExample = document.getElementById("liveToast");

   if (toastTrigger) {
      const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
      toastTrigger.addEventListener("click", () => {
         toastBootstrap.show();
      });
   }

   // Offcanvas
   var offcanvasElements = document.querySelectorAll(".offcanvas");

   if (offcanvasElements.length) {
      const offcanvasElementList = document.querySelectorAll(".offcanvas");
      const offcanvasList = [...offcanvasElementList].map((offcanvasEl) => new bootstrap.Offcanvas(offcanvasEl));
   }

   // Tooltips

   const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

   if (tooltipTriggerList.length) {
      const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
   }

   // Feather.js
   feather.replace();
})();

// Simplbar js
document.addEventListener("DOMContentLoaded", function () {
   // Get the sidebar element
   var sidebar = document.getElementById("myScrollableElement");

   // Check if the sidebar element exists
   if (sidebar) {
      // Initialize SimpleBar only if the sidebar element is found
      var simpleBar = new SimpleBar(sidebar);

      // Your existing code for handling links and scrolling
      var links = document.querySelectorAll(".navbar-nav a");

      // Check if there are any links
      if (links.length > 0) {
         var lastLink = links[links.length - 1];
         simpleBar.getScrollElement().scrollTop = lastLink.offsetTop - sidebar.offsetTop;

         links.forEach(function (link) {
            link.addEventListener("click", function (event) {
               if (this.getAttribute("href").charAt(0) === "#") {
                  event.preventDefault();
                  var targetId = this.getAttribute("href").substring(1);
                  var targetSection = document.getElementById(targetId);

                  if (targetSection) {
                     var offsetTop = targetSection.offsetTop;
                     simpleBar.getScrollElement().scrollTop = offsetTop - sidebar.offsetTop;
                  }
               }
            });
         });
      } else {
         console.error("No links found in the navbar.");
      }
   }
});
