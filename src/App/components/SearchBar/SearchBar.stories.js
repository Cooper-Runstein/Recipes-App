import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SearchBar from "./SearchBar.tsx";

storiesOf("SearchBar", module).add("hello world", () => {
  return <SearchBar />;
});
