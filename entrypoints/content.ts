export default defineContentScript({
  matches: ["*://*/*"],

  main() {
    function addDiffLinks() {
      const links = document.querySelectorAll<HTMLAnchorElement>(
        'details>ul>li>a[href*="commits/"][href*="since="],details>ul>li>details>summary>a[href*="commits/"][href*="since="]'
      );

      links.forEach((link) => {
        if (link.dataset.diffAdded) return;
        link.dataset.diffAdded = "true";

        try {
          const url = new URL(link.href);

          // repo = owner/repo
          const parts = url.pathname.split("/");
          const repo = `${parts[1]}/${parts[2]}`;

          // file = everything after /commits/<branch>/
          const file = parts.slice(5).join("/");

          // since = YYYY-MM-DD (strip time)
          const sinceFull = url.searchParams.get("since") ?? "";
          const since = sinceFull.split("T")[0];

          const diffUrl = `https://git-diff-viewer.trueberryless.org/diff?repo=${encodeURIComponent(
            repo
          )}&file=${encodeURIComponent(file)}&since=${encodeURIComponent(since)}`;

          // Create ", " separator (plain text)
          const separator = document.createTextNode(", ");

          // Create the new link
          const newLink = document.createElement("a");
          newLink.href = diffUrl;
          newLink.textContent = "diff viewer ↗";
          newLink.target = "_blank";
          newLink.style.marginLeft = "0.25em";
          newLink.style.color = "var(--ln-color-link)";

          // Insert as: link + ", " + diff link
          link.insertAdjacentElement("afterend", newLink);
          link.insertAdjacentText("afterend", ",");
        } catch (err) {
          console.error("Failed to add diff viewer link:", err);
        }
      });
    }

    // Run on initial load
    addDiffLinks();

    // Watch for dynamic changes in the DOM
    const observer = new MutationObserver(addDiffLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    console.log("Lunaria diff extension loaded.");
  },
});
