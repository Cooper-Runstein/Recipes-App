import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import SearchBar from "./SearchBar.tsx";

storiesOf("SearchBar", module)
  .add("Default", () => {
    return <SearchBar submitFunc={() => null} entryFunc={() => null} />;
  })
  .add("Red", () => {
    return (
      <SearchBar color={"red"} submitFunc={() => null} entryFunc={() => null} />
    );
  });
