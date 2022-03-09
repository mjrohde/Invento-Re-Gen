export function hamburgerMenu() {
  const menu = document.querySelector("#hamburger");
  menu.addEventListener("click", () => {
    if (menu.id === "hamburgerActive") {
      menu.id = "hamburger";
    } else {
      menu.id = "hamburgerActive";
    }
  });
}