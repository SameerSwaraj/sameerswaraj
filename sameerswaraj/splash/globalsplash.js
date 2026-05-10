if (!sessionStorage.getItem("splashShown")) {

  sessionStorage.setItem("splashShown", "true");

  sessionStorage.setItem("nextPage", window.location.href);

  window.location.replace("../splash/index.html");
}