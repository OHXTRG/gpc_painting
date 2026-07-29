export function getSectionIdFromHref(href: string): string | null {
  const match = href.match(/^\/#(.+)$/);
  return match ? match[1] : null;
}

export function scrollToSection(id: string, behavior: ScrollBehavior = "smooth") {
  document.getElementById(id)?.scrollIntoView({ behavior, block: "start" });
}

export function handleSectionNavClick(
  href: string,
  pathname: string,
  onNavigate?: () => void,
): boolean {
  const sectionId = getSectionIdFromHref(href);

  if (sectionId && pathname === "/") {
    scrollToSection(sectionId);
    window.history.pushState(null, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
    onNavigate?.();
    return true;
  }

  if (href === "/" && pathname === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    window.dispatchEvent(new PopStateEvent("popstate"));
    onNavigate?.();
    return true;
  }

  onNavigate?.();
  return false;
}
