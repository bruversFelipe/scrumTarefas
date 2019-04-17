import React, { useContext } from "react";
import Switch from "antd/lib/switch";
import ThemeContext from "../../../../Theme/ThemeContext";

const ThemeDark = () => {
  const context = useContext(ThemeContext);
  const onChangeTheme = check => {
    let option = "defaultTheme";
    if (check) {
      option = "darkTheme";
    }
    context.toggleTheme(option);
  };
  return (
    <div>
      <Switch
        size="small"
        checkedChildren="Tema Claro"
        unCheckedChildren="Tema Escuro"
        onChange={onChangeTheme}
      />
    </div>
  );
};

export default ThemeDark;
