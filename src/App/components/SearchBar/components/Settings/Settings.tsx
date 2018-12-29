import * as React from "react";

import Icon, { IconType } from "App/components/common/Icon";

import styles from "./Settings.module.scss";

type SettingsState = {
  active: boolean;
  vegan: boolean;
  vegetarian: boolean;
};
type SettingsProps = {};

class Settings extends React.Component<SettingsProps, SettingsState> {
  public state = {
    active: false,
    vegan: false,
    vegetarian: false
  };

  public activate = (value: string) => {
    this.setState({
      ...this.state,
      [value]: !this.state[value]
    });
  };

  public render() {
    return (
      <div className={styles.container}>
        <span onClick={() => this.activate("active")}>
          <Icon iconType={IconType.SETTINGS} color={"white"} />
        </span>
        {this.state.active && (
          <div className={styles.boxes}>
            <span>
              <input
                type="checkbox"
                name="gender"
                checked={this.state.vegan}
                onChange={() => this.activate("vegan")}
              />{" "}
              Vegan
            </span>
            <span>
              <input
                type="checkbox"
                name="gender"
                checked={this.state.vegetarian || this.state.vegan}
                onChange={() => this.activate("vegetarian")}
              />{" "}
              Vegetarian
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Settings;
