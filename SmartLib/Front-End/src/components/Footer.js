

import { React } from "react";
import {
  Pane,
  Heading,
} from "evergreen-ui";

function Footer() {
  return (
    <Pane display="flex" padding={15} background="grey" borderRadius={0}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading marginRight={10} size={600} color="white">
          Team Xeon
        </Heading>
      </Pane>
      <Pane backgroundColor="none">
    
      </Pane>
    </Pane>
  );
}

export default Footer;
