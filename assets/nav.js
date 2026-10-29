// Top navigation bar shared by every page
(function () {
  var pages = [
    ["index.html", "Home"],
    ["publications.html", "Publications"],
    ["talks.html", "Talks"],
    ["notebooks.html", "Notebooks"],
    ["outside.html", "Outside"],
  ];
  var current = location.pathname.split("/").pop() || "index.html";

  var header = document.createElement("header");
  header.className = "topbar";
  header.innerHTML =
    '<div class="topbar-inner">' +
    '<a class="brand" href="index.html">Valentin Benedetti</a>' +
    '<nav class="nav">' +
    pages
      .map(function (p) {
        var cls = p[0] === current ? ' class="active"' : "";
        return '<a href="' + p[0] + '"' + cls + ">" + p[1] + "</a>";
      })
      .join("") +
    "</nav></div>";
  document.body.prepend(header);


  // Optional filter buttons (talks page)
  var filters = document.querySelector(".filters");
  if (filters) {
    filters.addEventListener("click", function (e) {
      var kind = e.target.getAttribute("data-kind");
      if (kind === null) return;
      filters.querySelectorAll("button").forEach(function (b) { b.classList.toggle("on", b === e.target); });
      document.querySelectorAll("[data-type]").forEach(function (li) {
        li.style.display = !kind || li.getAttribute("data-type") === kind ? "" : "none";
      });
    });
  }
})();
