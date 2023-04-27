import React, { useState } from "react";
import cn from "classnames";
import styles from "./Dropdown.module.sass";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import Icon from "../../Icon";

const Dropdown = ({ className, item, setValue }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(false);
    setValue(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.dropdown, {
          [styles.active]: visible,
        })}
      >
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          {item.title}
          <Icon name="arrow-down" size="16" />
        </button>
        <div className={styles.body}>
          {item.dropdown.map((x, index) => (
            <Link
              className={styles.link}
              href={x.url}
              key={index}
              onClick={() => handleClick()}
            >
              <Icon name={x.icon} size="20" />
              {x.title}
            </Link>
          ))
          }
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Dropdown;
