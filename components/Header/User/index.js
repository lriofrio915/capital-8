import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./User.module.sass";
import Icon from "../../Icon";
import Theme from "../../Theme";

const items = [
  {
    title: "Perfil",
    icon: "user",
    content: "Detalles importante de la cuenta",
    url: "/profile-info",
  },
  {
    title: "Referidos",
    icon: "share",
    content: "Invita a tus amigos y gana recompensas",
    url: "/referrals",
  },
  {
    title: "Seguridad 2FA",
    icon: "lock",
    content: "Configura 2FA para más seguridad",
    url: "/2fa",
  },
  {
    title: "Configuración",
    icon: "cog",
    content: "Ver configuraciones adicionales",
    url: "/api-keys",
  },
  {
    title: "Modo oscuro",
    icon: "theme-dark",
    content: "Cambiar modo oscuro/claro",
  },
  {
    title: "Salir",
    icon: "exit",
    url: "/",
  },
];

const User = ({ className }) => {

  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cn(className, styles.user, { [styles.active]: visible })}>
        <button className={styles.head} onClick={() => setVisible(!visible)}>
          <Image 
            src="/images/content/avatar-user.jpg" 
            alt="Avatar" 
            width={31}
            height={31}
            style={{ width: "auto", height: "auto" }}
            priority={true}
          />
        </button>
        <div className={styles.body}>
          <div className={styles.menu}>
            {items.map((x, index) =>
              x.url ? (
                <Link
                  className={styles.item}
                  href={x.url}
                  onClick={() => setVisible(!visible)}
                  key={index}
                >
                  <div className={styles.icon}>
                    <Icon name={x.icon} size="20" />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.title}>{x.title}</div>
                    <div className={styles.content}>{x.content}</div>
                  </div>
                </Link>
              ) : (
                <div className={styles.item} key={index}>
                  <div className={styles.icon}>
                    <Icon name={x.icon} size="20" />
                  </div>
                  <div className={styles.details}>
                    <div className={styles.line}>
                      <div className={styles.title}>{x.title}</div>
                      <Theme className={styles.theme} small />
                    </div>
                    <div className={styles.content}>{x.content}</div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default User;
