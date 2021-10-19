import store from "@/store";

export const ROUTES = [
  { path: "/", name: "Beautify" },
  { path: "/Compare", name: "Compare" },
  { path: "/Execute", name: "Execute" },
];

export const FONTS = ["monospace", "serif"];

export const SETTINGS = {
  hasWelcomePage: true,
  font: "monospace",
};

export const VERSION = [
  {
    name: store.state.version,
    body:
      "* More stable version.\r\n* New App route system.\r\n* Work in progress global theme.\r\n* Fixed few bugs.",
    published_at: "2021-10-19T07:25:27Z",
  },
];
