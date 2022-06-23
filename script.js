// SHOW MENU

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener("click", () => {
//       nav.classList.toggle("show");
//     });
//   }
// };

// showMenu("nav_toggle", "nav_menu");

// // ACTIVE & REMOVE ACTIVE
// const navLink = document.querySelectorAll(".nav_link");
// navLink.forEach((n) => n.classList.remove("active"));

// function linkAction() {
//   navLink.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");

//   const navMenu = document.getElementById("nav_menu");
//   navMenu.classList.remove("show");
// }

// navLink.forEach((n) => n.addEventListener("click", linkAction));

// to show the menu once clicked

const ShowMenu = () => {
  const toggle = document.getElementById("nav_toggle");
  const nav = document.getElementById("nav_menu");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

ShowMenu();

// to make a section active and remove active from other sections
const navItems = document.querySelectorAll("nav_link");

const RemoveActive = () => {
  const navItems = document.querySelectorAll(".nav_link");
  //   to remove active from all secs
  navItems.forEach((item) => item.classList.remove("active"));
  //to remove active from all secs, add active to sec clicked and hiding navmenu bar
  navItems.forEach((item) =>
    item.addEventListener("click", () => {
      navItems.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
      const navMenu = document.getElementById("nav_menu");
      navMenu.classList.remove("show");
    })
  );
};
RemoveActive();
