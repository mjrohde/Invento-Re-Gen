export function hamburgerMenu() {
  const menu = document.querySelector("#hamburger");
  const lines = document.querySelectorAll(".lines");
  if (menu) {
    menu.addEventListener("click", () => {
      if (menu.id === "hamburgerActive") {
        menu.id = "hamburger";
        lines[0].className = "lines first";
        lines[1].className = "lines second";
        lines[2].className = "lines third";
      } else {
        menu.id = "hamburgerActive";
        for (var i = 0; i < lines.length; i++) {
          lines[i].className += " active";
        }
      }
    });
  }
}
