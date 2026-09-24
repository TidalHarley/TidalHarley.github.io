(function initSectionNavigation() {
  const nav = document.querySelector(".section-nav");
  const list = document.getElementById("section-nav-list");
  const track = nav && nav.querySelector(".section-nav__track");
  const sections = Array.from(document.querySelectorAll("[data-nav-section]"));

  if (!nav || !list || !track || sections.length === 0) return;

  const compactLayout = window.matchMedia("(max-width: 1170px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const links = sections.map(function (section, index) {
    const heading = section.querySelector(".section-title");
    const label = section.dataset.navLabel || (heading && heading.textContent.trim());
    let link = list.querySelector('a[href="#' + section.id + '"]');
    const item = link ? link.parentElement : document.createElement("li");

    item.className = "section-nav__item";
    item.style.setProperty("--nav-index", index);
    if (!link) {
      link = document.createElement("a");
      link.className = "section-nav__link";
      link.href = "#" + section.id;
      link.textContent = label;
      item.appendChild(link);
      list.appendChild(item);
    }

    return { section: section, item: item, link: link };
  });

  let activeId = "";
  let scrollTicking = false;
  let requestedEntry = null;

  function documentTop(element) {
    return element.getBoundingClientRect().top + window.scrollY;
  }

  function positionIndicator(item) {
    nav.style.setProperty("--indicator-y", item.offsetTop + "px");
    nav.style.setProperty("--indicator-height", item.offsetHeight + "px");
    nav.style.setProperty("--indicator-x", item.offsetLeft + "px");
    nav.style.setProperty("--indicator-width", item.offsetWidth + "px");
  }

  function revealCompactLink(item) {
    if (!compactLayout.matches) return;

    const targetLeft = item.offsetLeft - (track.clientWidth - item.offsetWidth) / 2;
    track.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: reducedMotion.matches ? "auto" : "smooth"
    });
  }

  function setActive(entry) {
    activeId = entry.section.id;
    links.forEach(function (candidate) {
      const isActive = candidate === entry;
      candidate.link.classList.toggle("is-active", isActive);
      candidate.section.classList.toggle("is-current", isActive);
      if (isActive) {
        candidate.link.setAttribute("aria-current", "location");
      } else {
        candidate.link.removeAttribute("aria-current");
      }
    });

    positionIndicator(entry.item);
    revealCompactLink(entry.item);
  }

  function syncActiveSection() {
    const ordered = links.slice().sort(function (a, b) {
      return documentTop(a.section) - documentTop(b.section);
    });
    const navHeight = compactLayout.matches ? nav.getBoundingClientRect().height : 0;
    const anchorOffset = parseFloat(window.getComputedStyle(ordered[0].section).scrollMarginTop) || 0;
    const probe = window.scrollY + Math.max(navHeight + 28, anchorOffset + 2);
    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
    let current = ordered[0];

    ordered.forEach(function (entry) {
      if (documentTop(entry.section) <= probe) current = entry;
    });
    if (atBottom) {
      const targetBounds = requestedEntry && requestedEntry.section.getBoundingClientRect();
      // Short final sections cannot always scroll to the top of the viewport.
      current = targetBounds && targetBounds.top >= navHeight && targetBounds.top < window.innerHeight
        ? requestedEntry : ordered[ordered.length - 1];
    }

    if (current.section.id !== activeId) {
      setActive(current);
    } else {
      positionIndicator(current.item);
    }
    scrollTicking = false;
  }

  function scheduleSync() {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(syncActiveSection);
  }

  links.forEach(function (entry) {
    entry.link.addEventListener("click", function (event) {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      requestedEntry = entry;
      entry.section.scrollIntoView({
        behavior: reducedMotion.matches ? "auto" : "smooth",
        block: "start"
      });
      if (window.location.hash !== entry.link.hash) {
        try {
          window.history.pushState(null, "", entry.link.hash);
        } catch (_) {
          // Some browsers restrict History API changes on local file URLs.
          window.location.hash = entry.link.hash;
        }
      }
      setActive(entry);
      if (event.detail === 0) entry.section.focus({ preventScroll: true });
      else entry.link.blur();
    });
  });

  function clearNavigationTarget() {
    requestedEntry = null;
    scheduleSync();
  }
  window.addEventListener("wheel", clearNavigationTarget, { passive: true });
  window.addEventListener("touchstart", clearNavigationTarget, { passive: true });
  window.addEventListener("keydown", function (event) {
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      clearNavigationTarget();
    }
  });
  window.addEventListener("hashchange", clearNavigationTarget);
  window.addEventListener("popstate", clearNavigationTarget);
  window.addEventListener("scroll", scheduleSync, { passive: true });
  window.addEventListener("resize", scheduleSync, { passive: true });
  window.addEventListener("hashchange", scheduleSync);
  window.addEventListener("pageshow", scheduleSync);
  window.addEventListener("popstate", scheduleSync);
  compactLayout.addEventListener("change", scheduleSync);
  document.addEventListener("toggle", scheduleSync, true);
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(scheduleSync);
    sections.forEach(function (section) { observer.observe(section); });
  }

  syncActiveSection();
  nav.classList.add("is-ready");

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(scheduleSync);
  }
})();
