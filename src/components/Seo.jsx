import { useEffect } from 'react';

const updateMeta = (selector, attrName, attrValue, content) => {
  let element = document.head.querySelector(selector);

  if (element) {
    element.setAttribute('content', content);
    return;
  }

  element = document.createElement('meta');
  element.setAttribute(attrName, attrValue);
  element.setAttribute('content', content);
  document.head.appendChild(element);
};

const setMetaTag = (name, content) => {
  if (!content) return;
  updateMeta(`meta[name="${name}"]`, 'name', name, content);
};

const setMetaProperty = (property, content) => {
  if (!content) return;
  updateMeta(`meta[property="${property}"]`, 'property', property, content);
};

const setCanonical = (href) => {
  if (!href) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (link) {
    link.href = href;
    return;
  }

  link = document.createElement('link');
  link.rel = 'canonical';
  link.href = href;
  document.head.appendChild(link);
};

export default function Seo({ title, description, keywords, canonical, robots = 'index, follow', openGraph = {} }) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaProperty('og:title', title);
      setMetaTag('twitter:title', title);
    }

    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('robots', robots);
    setCanonical(canonical);

    if (description) {
      setMetaProperty('og:description', description);
      setMetaTag('twitter:description', description);
    }

    if (openGraph.url) {
      setMetaProperty('og:url', openGraph.url);
    }

    if (openGraph.image) {
      setMetaProperty('og:image', openGraph.image);
      setMetaTag('twitter:image', openGraph.image);
      setMetaTag('twitter:card', 'summary_large_image');
    }

    setMetaProperty('og:type', 'website');
  }, [title, description, keywords, canonical, robots, openGraph]);

  return null;
}
