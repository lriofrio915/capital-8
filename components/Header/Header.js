import React, { useState } from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Header.module.sass";
import Image from "next/image";
import Dropdown from "./Dropdown";
import Icon from "../Icon";
import Notifications from "./Notifications";
import User from "./User";
// import Theme from "../Theme";


const navigation = [
  { 
    title: "Intercambio", 
    url: "/exchange"
  },
  { 
    title: "Comprar Cripto",
    dropdown: [
      { title: "Tarjeta de crédito", icon: "user", url: "/buy-crypto",},
      { title: "Depósito bancario", icon: "image", url: "/deposit-fiat" },
    ],
  },
  { 
    title: "Mercado", 
    url: "/market"
  },
  { 
    title: "Descubre", 
    url: "/learn-crypto"
  },
];

const Header = ({ headerWide }) => {
  
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={cn(styles.header, { [styles.wide]: headerWide })}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          href="/"
        >
          <Image
            className={styles.picDesktop}
            src="/images/logo-light.svg"
            // srcDark="/images/logo-dark.svg"
            alt="Capital 8 logo"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
            priority={true}
          />
          <Image
            className={styles.picMobile}
            src="/images/logo.svg"
            alt="Capital 8 logo"
            width={50}
            height={50}
            style={{ width: "auto", height: "auto" }}
            priority={true}
          />
        </Link>
        <div className={styles.wrapper}>
          <div className={cn(styles.wrap, { [styles.visible]: visibleNav })}>
            <nav className={styles.nav}>
              {navigation.map((x, index) =>
                x.dropdown ? (
                  <Dropdown
                    className={styles.dropdown}
                    key={index}
                    item={x}
                    setValue={setVisibleNav}
                  />
                ) : (
                  <Link
                    className={styles.item}
                    href={x.url}
                    key={index}
                  >
                    {x.title}
                  </Link>
                )
              )}
            </nav>
            <Link
              className={cn("button-stroke", styles.button)}
              href="/wallet-overview"
            >
              Billetera
            </Link>
            <div className={styles.btns}>
              <Link
                className={cn("button-small", styles.button)}
                href="/sign-up"
              >
                Registrarse
              </Link>
              <Link
                className={cn("button-stroke button-small", styles.button)}
                href="/sign-in"
              >
                Acceder
              </Link>
            </div>
          </div>
          <div className={styles.control}>
            <Link
              className={styles.activity}
              href="/activity"
            >
              <Icon name="lightning" size="24" />
            </Link>
            <Notifications className={styles.notifications} />
            <Link
              className={cn("button-stroke button-small", styles.button)}
              href="/wallet-overview"
            >
              Billetera
            </Link>
            {/* <Theme className={styles.theme} icon /> */}
            <User className={styles.user} />
          </div>
          <div className={styles.btns}>
            <Link
              className={cn("button-small", styles.button)}
              href="/sign-up"
            >
              Registrarse
            </Link>
            <Link
              className={cn("button-stroke button-small", styles.button)}
              href="/sign-in"
            >
              Acceder
            </Link>
          </div>
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
