import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@n5/app-rick-and-morty",
  app: () => System.import("@n5/app-rick-and-morty"),
  activeWhen: ["/rick-and-morty"],
});

registerApplication({
  name: "@n5/app-harry-potter",
  app: () => System.import("@n5/app-harry-potter"),
  activeWhen: ["/harry-potter"],
});

start({
  urlRerouteOnly: true,
});
