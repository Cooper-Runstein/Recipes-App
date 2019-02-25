import * as React from "react";

import Icon, { IconType } from "App/components/common/Icon";

import { Veg } from "typings/globalEnums";

import styles from "./Settings.module.scss";

type SettingsProps = {
  onSettingsChange: (val: any) => void;
  settingsActive: boolean;
  veg: Veg;
  activate: (e: string) => void;
};

const Settings = ({
  settingsActive,
  activate,
  veg,
  onSettingsChange
}: SettingsProps) => {
  return (
    <div className={styles.container}>
      <span onClick={() => activate("active")} className={styles.iconWrapper}>
        <Icon iconType={IconType.SETTINGS} color={"white"} />
      </span>
      {settingsActive && (
        <div className={styles.boxes}>
          <span>
            <input
              type="checkbox"
              name={Veg.VEGAN}
              checked={veg === Veg.VEGAN}
              onChange={() => onSettingsChange(Veg.VEGAN)}
            />{" "}
            Vegan
          </span>
          <span>
            <input
              type="checkbox"
              name={Veg.VEGETARIAN}
              checked={veg === Veg.VEGETARIAN || veg === Veg.VEGAN}
              onChange={() => onSettingsChange(Veg.VEGETARIAN)}
            />{" "}
            Vegetarian
          </span>
        </div>
      )}
    </div>
  );
};

export default Settings;
