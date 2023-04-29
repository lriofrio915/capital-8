import React, { useState } from "react";
import Link from "next/link";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Form from "../Form";
import Icon from "../Icon";
import Image from "next/image";

const menu = [
  {
    title: "Intercambio",
    url: "/exchange",
  },
  {
    title: "Comprar cripto",
    url: "/buy-crypto",
  },
  {
    title: "Mercado",
    url: "/market",
  },
  {
    title: "Conocer cripto",
    url: "/learn-crypto",
  },
  {
    title: "Contacto",
    url: "/contact",
  },
];

const socials = [
  {
    title: "facebook",
    size: "16",
    url: "https://www.facebook.com/capital8ec",
  },
  {
    title: "twitter",
    size: "18",
    url: "https://twitter.com/",
  },
  {
    title: "instagram",
    size: "16",
    url: "https://www.instagram.com/capital_8_ec/",
  },
];

const Footer = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert("Gracias por subscribirse!");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.body}>
        <div className={cn("container", styles.container)}>
          <div className={styles.col}>
            <Link 
              className={styles.logo} 
              href="/">
              <Image
                className={styles.picDesktop}
                src="images/logo.svg"
                alt="Capital 8"
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
                priority={true}
              />
              <Image
                className={styles.picMobile}
                src="/images/logo-light.svg"
                // srcDark="/images/logo-dark.svg"
                alt="Capital 8"
                width={50}
                height={50}
                style={{ width: "auto", height: "auto" }}
                priority={true}
              />
            </Link>
            <div className={cn(styles.item, { [styles.active]: visible })}>
              <div
                className={styles.category}
                onClick={() => setVisible(!visible)}
              >
                Navegación
                <Icon name="arrow-down" size="24" />
              </div>
              <div className={styles.menu}>
                {menu.map((x, index) => (
                  <Link
                    className={styles.link}
                    // activeClassName={styles.active}
                    href={x.url}
                    key={index}
                  >
                    {x.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>contacto</div>
            <div className={styles.info}>
              <p>Quito</p>
              <p>Pichincha</p>
              <p>Ecuador</p>
              <p>+593 99-669-1586</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.category}>newsletter</div>
            <div className={styles.info}>
            Suscríbete a nuestro boletín informativo.
            </div>
            <Form
              className={styles.form}
              value={email}
              setValue={setEmail}
              onSubmit={() => handleSubmit()}
              placeholder="Ingresa tu email"
              type="email"
              name="email"
              icon="arrow-next"
            />
          </div>
        </div>
      </div>
      <div className={styles.foot}>
        <div className={cn("container", styles.container)}>
          <div className={styles.copyright}>
            Copyright © 2022 CAP8 Sociedad Civil & Comercial. Todos los derechos reservados
          </div>
          <div className={styles.socials}>
            {socials.map((x, index) => (
              <a
                className={styles.social}
                href={x.url}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
              >
                <Icon name={x.title} size={x.size} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
