const tags = [
    "html",
    "base",
    "head",
    "style",
    "title",
    "address",
    "article",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "nav",
    "section",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    "area",
    "audio",
    "map",
    "track",
    "video",
    "embed",
    "object",
    "param",
    "source",
    "canvas",
    "noscript",
    "script",
    "del",
    "ins",
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "button",
    "datalist",
    "fieldset",
    "form",
    "input",
    "keygen",
    "label",
    "legend",
    "meter",
    "optgroup",
    "option",
    "output",
    "progress",
    "select",
    "details",
    "dialog",
    "menu",
    "menuitem",
    "summary",
    "content",
    "element",
    "shadow",
    "template",
    "acronym",
    "applet",
    "basefont",
    "big",
    "blink",
    "center",
    "dir",
    "frame",
    "frameset",
    "isindex",
    "listing",
    "noembed",
    "plaintext",
    "spacer",
    "strike",
    "tt",
    "xmp",
];

function element(tag, attrs, ...children) {
    const el = document.createElement(tag);
    if (attrs) {
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    }
    el.append(...children);
    return el;
}

const camel = (kebab) => kebab.toString().replace(/(-[a-z,0-9]{1})/g, (_, match) => match[1].toUpperCase());

const tiit = (tag) => Object.defineProperty(globalThis, camel(tag), { value: element.bind(null, tag) });

const api = {};
tags.forEach((tag) => {
    api[tag] = { value: element.bind(null, tag) };
});

Object.defineProperties(globalThis, api);
tiit.element = element;
globalThis.tiit = tiit;
