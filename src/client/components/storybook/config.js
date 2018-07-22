import { configure } from "@storybook/react";

function loadStories() {
  require("./stories/menu");
  require("./stories/mainFlame");
  require("./stories/participant");
  require("./stories/mascot");
}

configure(loadStories, module);
