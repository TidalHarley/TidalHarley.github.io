(function initResearchSelection() {
  const button = document.getElementById("research-toggle");
  const heading = document.getElementById("research-heading");
  const status = document.getElementById("research-status");
  const papers = Array.from(document.querySelectorAll("#research-papers .paper-row"));
  if (!button || !heading || papers.length === 0) return;

  let showAll = false;
  function updateSelection(announce) {
    papers.forEach(function (paper) {
      paper.hidden = !showAll && paper.dataset.highlight !== "true";
    });
    heading.textContent = showAll ? "All Research Papers" : "Highlight Research";
    button.textContent = showAll ? "Highlight Research" : "All Research Papers";
    button.setAttribute("aria-expanded", String(showAll));
    button.setAttribute("aria-label", showAll ? "Show highlighted research only" : "Show all research papers");
    if (announce && status) {
      const count = papers.filter(function (paper) { return !paper.hidden; }).length;
      status.textContent = "Showing " + count + (showAll ? " research papers." : " highlighted papers.");
    }
  }

  button.addEventListener("click", function () {
    showAll = !showAll;
    updateSelection(true);
  });
  updateSelection(false);
  button.hidden = false;
})();

(function initFigurePreview() {
  const dialog = document.getElementById("figure-dialog");
  const image = document.getElementById("figure-image");
  const caption = document.getElementById("figure-caption");
  if (!dialog || typeof dialog.showModal !== "function") return;

  let trigger = null;
  document.querySelectorAll("a[data-figure]").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      image.src = link.href;
      image.alt = link.querySelector("img").alt;
      caption.textContent = link.dataset.caption;
      dialog.showModal();
    });
  });

  dialog.addEventListener("click", function (event) {
    const bounds = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom)) {
      dialog.close();
    }
  });

  dialog.addEventListener("close", function () {
    if (trigger) trigger.focus({ preventScroll: true });
  });
})();
