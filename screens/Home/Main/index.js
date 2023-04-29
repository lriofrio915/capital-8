import React from "react";
import cn from "classnames";
import Link from "next/link";
import styles from "./Main.module.sass";
import ScrollButton from "../../../components/ScrollButton";
import Cards from "./Cards";

const Main = ({ scrollToRef }) => {
    return (
        <div className={cn("section", styles.main)}>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <h1 className={cn("h1", styles.title)}>
                        Compra & vende <br></br>cripto en minutos
                    </h1>
                    <div className={styles.text}>
                        Comercializa Bitcoin, Oro, USDT, y las mejores altcoins desde nuestro moderno exchange de criptoactivos. 
                    </div>
                    <Link className={cn("button", styles.button)} href="/sign-up">
                        Empieza ahora
                    </Link>
                    <ScrollButton
                        onScroll={() => {
                            if (scrollToRef.current) {
                                scrollToRef.current.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }
                        }}
                        className={styles.scroll}
                    />
                </div>
                <div className={styles.bg}>
                    <img
                        srcSet="/images/content/cards@2x.png 2x"
                        src="/images/content/cards.png"
                        alt="Cards"
                    />
                </div>
                <Cards className={styles.cards} />
            </div>
        </div>
    );
};

export default Main;
