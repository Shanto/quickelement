const isDictionary = (v) => { return v.constructor == Object }

export const el = (tag, klass, attributes, contents) => {
  const sanitize = trustedTypes.createPolicy("htmlEscapePolicy", {
    createHTML: (string) => string.replace(/</g, "&lt;"),
  });
  const element = document.createElement(tag);
  if (attributes && attributes.className) {
    element.classList.add(attributes.className);
  }
  if (klass && typeof klass === "string") {
    element.classList.add(klass);
  }
  if (klass && Array.isArray(klass)) {
    element.classList.add(...klass);
  }

  if (attributes && isDictionary(attributes)) {
    for (let attrKey of Object.keys(attributes)) {
      if (attrKey == "className") {
        continue;
      }
      element.setAttribute(attrKey, attributes[attrKey]);
    }
  }

  if (attributes && (Array.isArray(attributes) || typeof attributes == 'string')) {
    contents = attributes  // treat attributes as contents.
  }

  if (!!contents) {
    if (typeof contents == "string") {
      let textNode = document.createElement("span");
      textNode.innerHTML = sanitize.createHTML(contents);
      element.appendChild(textNode);
    } else if (typeof contents == "object" && contents.length) {
      for (let child of contents) {
        if (child && typeof child == "object") {
          element.appendChild(child);
        }
      }
    }
  }
  return element;
};

export const td = (klass, attributes, contents) =>
  el("td", klass, attributes, contents);
export const tr = (klass, attributes, contents) =>
  el("tr", klass, attributes, contents);
export const div = (klass, attributes, contents) =>
  el("div", klass, attributes, contents);
export const span = (klass, attributes, contents) =>
  el("span", klass, attributes, contents);
export const img = (klass, attributes, contents) =>
  el("img", klass, attributes, contents);
export const a = (klass, attributes, contents) =>
  el("a", klass, attributes, contents);
