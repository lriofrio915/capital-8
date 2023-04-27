import React, { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Notifications.module.sass";
import Icon from "../../Icon";

const items = [
  {
    title: "Intento de inicio de sesión desde una nueva IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Solicitud para restablecer la seguridad",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Intento de inicio de sesión desde una nueva IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Solicitud para restablecer la seguridad",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Intento de inicio de sesión desde una nueva IP",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
  {
    title: "Solicitud para restablecer la seguridad",
    date: "2021-03-10 20:19:15",
    url: "/notifications",
  },
];

const Notifications = ({ className }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cn(className, styles.notifications, {
          [styles.active]: visible,
        })}
      >
        <button
          className={cn(styles.head, styles.active)}
          onClick={() => setVisible(!visible)}
        >
          <Icon name="bell" size="24" />
        </button>
        <div className={styles.body}>
          <div className={styles.title}>Notificaciones</div>
          <div className={styles.list}>
            {items.map((x, index) => (
              <Link
                className={cn(styles.item, { [styles.new]: index < 4 })}
                href={x.url}
                onClick={() => setVisible(!visible)}
                key={index}
              >
                <div className={styles.subtitle}>{x.title}</div>
                <div className={styles.date}>{x.date}</div>
              </Link>
            ))}
          </div>
          <div className={styles.btns}>
            <Link
              className={cn("button-small", styles.button)}
              href="notifications"
              onClick={() => setVisible(false)}
            >
              Ver Todo
            </Link>
            <button className={cn("button-stroke button-small", styles.button)}>
              Limpiar Todo
            </button>
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default Notifications;
