const clickHandler = (event) => {
  event.preventDefault();

  const pageUrl = event.currentTarget.getAttribute('href');

  if (location.href === pageUrl) return;

  const navigateEvent = new CustomEvent('popstate', { detail: { pageUrl } });
  window.history.pushState({ pageUrl }, '', pageUrl);
  window.dispatchEvent(navigateEvent);
}

const Anchor = (props) => {
  if (!props.children) throw new Error('Anchors must to have children');
  return <a {...props} onClick={clickHandler} />;
}

export default Anchor;