export function removeScratch() {
  const clean = () => {
    document.querySelectorAll('*').forEach((el) => {
      if (!el.isConnected) return;

      const classes = [...el.classList];

      const shouldRemove = classes.some((className) =>
        className.startsWith('project-input_input_') ||
        className.startsWith('studioview') ||
        className.startsWith('featured-projects_')
      );

      if (shouldRemove) {
        const hasHomeLink =
          el.matches('a[href="https://potentiamod.github.io/home/"]') ||
          el.querySelector('a[href="https://potentiamod.github.io/home/"]');

        if (!hasHomeLink) {
          el.remove();
        }
      }
    });

    document.querySelectorAll(
      'a[target="_blank"][rel="noopener noreferrer"][href="https://scratch.mit.edu/studios/51729513/"]'
    ).forEach((el) => el.remove());
  };

  // Clean existing elements
  clean();

  // Keep removing dynamically added or modified elements
  const observer = new MutationObserver(clean);

  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'href', 'target', 'rel'],
  });

  // Return a function to stop removal
  return () => observer.disconnect();
}