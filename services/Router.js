const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = a.getAttribute("href");
        Router.go(url);
      });
    });
    window.addEventListener("popstate", (event) => {
      const route = event.state ? event.state.route : "/";
      Router.go(route, false);
    });
    //check the intial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Navigating to ${route}`);
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }
    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = document.createElement("menu-page");

        break;

      case "/order":
        pageElement = document.createElement("order-page");

        break;

      default:
        if (route.startsWith("/product-")) {
          pageElement = document.createElement("details-page");

          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }
    if (pageElement) {
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
