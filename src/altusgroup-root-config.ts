import { registerApplication, start, LifeCycles } from "single-spa";
// import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

registerApplication(
  "@altusgroup/navbar",
  () => System.import<LifeCycles>("@altusgroup/navbar"),
  isActive.nav,
  { domElement: document.getElementById('nav-container') }
);

registerApplication(
  "@altusgroup/page1",
  () => System.import<LifeCycles>("@altusgroup/page1"),
  isActive.page1,
  { domElement: document.getElementById('page-1-container') }
);

registerApplication(
  "@altusgroup/page2",
  () => System.import<LifeCycles>("@altusgroup/page2"),
  isActive.page2,
  { domElement: document.getElementById('page-2-container') }
);

// start({
//   urlRerouteOnly: true,
// });
start();
