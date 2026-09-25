// Syntax highlighting follows the resolved site theme, including manual toggles.
(function () {
  const root = document.documentElement;
  const stylesheets = document.querySelectorAll('link[data-code-theme]');

  function syncCodeTheme() {
    for (const stylesheet of stylesheets) {
      stylesheet.media = stylesheet.dataset.codeTheme === root.dataset.theme
        ? 'all'
        : 'not all';
    }
  }

  syncCodeTheme();
  new MutationObserver(syncCodeTheme).observe(root, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
})();
