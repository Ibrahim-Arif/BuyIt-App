import React from "react";

import Icon from "./Icon";
import colors from "../config/colors";

function ArrowIcon({ direction = "right", style }) {
  return (
    <Icon
      backgroundColor={colors.primary}
      name={"arrow-" + direction}
      color={colors.white}
      style={[{ borderRadius: 13 }, style]}
    />
  );
}

export default ArrowIcon;
