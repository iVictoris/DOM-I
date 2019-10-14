const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const extractData = (object, regex) => {
  return Object.entries(object).filter(([key, _]) => {
    return key.match(regex);
  });
};

const injectDataList = (nodeList, dataList) => {
  nodeList.forEach((node, index) => {
    node.textContent = dataList[index][1];
  });
};

const injectDataNode = (node, data) => {
  node.textContent = data;
};

// const injectDataNodes = (nodeList, dataList) => {
//   nodeList.forEach((node, index) => {
//     injectDataNode(node, dataList[index]);
//   });
// };

const linkImage = (node, path) => {
  node.src = path;
};

// const linkImages = (nodeList, pathList) => {
//   nodeList.forEach((node, index) => {
//     linkImage(node, pathList[index]);
//   });
// };

const injectNodes = nodeDataPairs => {
  nodeDataPairs.forEach(([node, value]) => {
    value.match(/^img/) ? linkImage(node, value) : injectDataNode(node, value);
  });
};

const navItems = document.querySelectorAll("nav>a");
const navImage = document.querySelector("#logo-img");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
const ctaImage = document.querySelector("#cta-img");
const h4Elements = document.querySelectorAll(".main-content h4");
const pElements = document.querySelectorAll(".text-content p");
const middleImage = document.querySelector("#middle-img");
const contacth4 = document.querySelector('.contact>h4');
const contactPElements = document.querySelectorAll('.contact p');
const footerP = document.querySelector('footer p');

const navEntries = Object.entries(siteContent.nav);
const headersData = extractData(siteContent["main-content"], /h4$/);
const contentData = extractData(siteContent["main-content"], /content$/);
const contactData = extractData(siteContent.contact, /address|phone|email/)

navItems.forEach((node, index) => {
  const [_, value] = navEntries[index];
  node.textContent = value;
});

injectNodes([
  [h1, siteContent.cta.h1],
  [button, siteContent.cta.button],
  [navImage, siteContent.nav["img-src"]],
  [ctaImage, siteContent.cta["img-src"]],
  [middleImage, siteContent["main-content"]["middle-img-src"]],
  [contacth4, siteContent.contact["contact-h4"]],
  [footerP, siteContent.footer.copyright]
]);

// injectDataNodes([h1, button], [siteContent.cta.h1, siteContent.cta.button]);

// linkImages(
//   [navImage, ctaImage],
//   [siteContent.nav["img-src"], siteContent.cta["img-src"]]
// );

injectDataList(h4Elements, headersData);
injectDataList(pElements, contentData);
injectDataList(contactPElements, contactData);

// console.log(contacth4, contactPElements)