import styles from "./Home.module.scss";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {Footer} from "../../Components/Footer/Footer.jsx";
import {ArrowRight, TelegramLogo} from "@phosphor-icons/react";
import {SubscribeModal} from "../../Common/subscribeModal/SubscribeModal.jsx";
import {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";


export const Home = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const sectionRef = useRef();
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        if (sectionRef.current) {
            sectionRef.current.addEventListener("mousemove", handleMouseMove);
        }
        return () => {
            if (sectionRef.current) {
                sectionRef.current.removeEventListener("mousemove", handleMouseMove);
            }
        };
    }, [sectionRef]);
    const parallaxStyle = {
        transform: `translate(-${position.x / 50}px, -${position.y / 40}px)`,
    };
    const parallaxStyleFast = {
        transform: `translate(-${position.x / 40}px, -${position.y / 100}px)`,
    };
    return (
        <div className={styles.homeWrapper}>
            {/*HOME PAGE MODAL*/}
            <SubscribeModal/>
            {/*/!*SITE MAIN COMPONENTS*!/*/}
            <Header/>
            {/*HOME PAGE MAIN CONTENT*/}
            <main className={styles.mainWrapper}>
                {/*ABOUT US SECTION*/}
                <section className={styles.aboutUsSection} ref={sectionRef}>
                    <div className={styles.aboutUsContent}>
                        <div className={styles.aboutUsLeft}>
                            <div className={styles.aboutUsLeftTittle}>
                                <p>About Us</p>
                                <h1>UNFORGETTABLE BURGERS,</h1>
                                <h1>UNFORGETTABLE MEMORIES</h1>
                                <div className={styles.aboutUsServices}>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe800;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>

                                    </a>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe801;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>
                                    </a>
                                    <a href="#" className={styles.servicesCard}>
                                        <div className={styles.iconBox}>
                                            <i/>&#xe802;
                                        </div>
                                        <span className={styles.serviceCardTittle}>Lorem ipsum dolor sit amet adipiscing elit</span>
                                    </a>
                                </div>
                                <a href="#">
                                    <button>
                                        About Us
                                        <ArrowRight/>
                                    </button>
                                </a>

                            </div>
                        </div>
                        <div className={styles.aboutUsRight}>
                            <div className={styles.spinningCircle}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg"
                                    alt=""
                                />

                            </div>
                            <div className={styles.floatingBurger}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/parallax-img-5-copyright.png"
                                    alt=""
                                    style={parallaxStyleFast}
                                />
                            </div>
                            <div className={styles.solidCircleTop}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={styles.solidCircleBottom}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill-2.svg"
                                     alt="decoration"/>
                            </div>
                            <div className={styles.redCrownTop}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/crown-3.svg"
                                     alt="Decoration"
                                     style={parallaxStyle}
                                />

                            </div>
                            <div className={styles.redBallTop}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-3.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-7.svg"
                                     alt="Decoration"
                                     style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-9.svg"
                                     alt="Decoration"
                                     style={parallaxStyleFast}
                                />
                            </div>
                            <div className={styles.redBottomLineBurger}>
                                <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-8.svg"
                                     alt="Decoration"
                                     style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.spinningCircleBottom}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-3.svg"
                                    alt=""
                                />

                            </div>
                            <div className={styles.redBigBallBottom}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-3.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallBallBottom}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redTinyBallBurger}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redSmallBallTop}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-4.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redTinyBallRight}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                            <div className={styles.redLineRightBurger}>
                                <img
                                    src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-10.svg"
                                    alt="Decoration"
                                    style={parallaxStyle}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/*OUR BURGERS SECTION*/}
                <section className={styles.ourBurgersSection}>
                    <div className={styles.ourBurgersContent}>
                        <div className={styles.ourBurgersHeading}>
                            <span>Our Burgers</span>
                            <h2>Unleash Your Burger Cravings with Our Menu</h2>

                        </div>
                        <div className={styles.ourBurgersProducts}>
                            {/*FOR LINE THROUGH ON SALE PRICE (WRITE PRICE IN SPAN <p>sale price<p/>)*/}
                            <div className={styles.ourBurgersCardWrapper}>
                                <div className={styles.burgerCard}>
                                    <Link to="/home/:id">
                                        <div className={styles.ourBurgersImg}>
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-3-copyright-480x480.png"
                                                alt="Burger"/>
                                        </div>
                                    </Link>
                                    <Link to="/home/details">
                                    <div className={styles.ourBurgerTitle}>
                                        <span>CHICKEN LINKED</span>
                                    </div>
                                    </Link>
                                    <div className={styles.ourBurgerPrice}>
                                        <span>$89.00</span>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <a href="#" >Buy Now</a>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/*LATEST NEWS SECTION WITH SLIDER*/}
                <section className={styles.latestNewsSection}>

                </section>
                {/*SUBSCRIBE SECTION*/}
                <section className={styles.subscribeSection}>
                    <div className={styles.subscribeSectionContent}>
                        <div className={`${styles.subscribeRotateCircleRight} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeSolidCircleRight} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRotateCircleLeft} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-dotted-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeSolidCircleLeft} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/circle-fill.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedLineRight} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-6.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedDotRight} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedCrownLeft} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/crown-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedDotTop} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedLineTop} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-5.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedLineBottom} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-lines-4.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={`${styles.subscribeRedDotBottom} ${styles.decoration}`}>
                            <img src="https://easyeat.ancorathemes.com/wp-content/uploads/2023/05/decor-circle-2.svg"
                                 alt="decoration"/>
                        </div>
                        <div className={styles.subscribeTittle}>
                            <h2>Subscribe for exclusive</h2>
                            <h2>updates and hot offers!</h2>
                        </div>
                        <div className={styles.subscribeFormWrapper}>
                            <form action="#">
                                <div className={styles.subscribeFormTop}>
                                    <label htmlFor="subscribeInput">
                                        <input type="main" placeholder="Enter Your Email Address" required/>
                                    </label>
                                    <button type="submit">
                                        <TelegramLogo/>
                                        SUBSCRIBE
                                    </button>
                                </div>
                                <div className={styles.subscribeFormBottom}>
                                    <label htmlFor="subscribeAgreement">
                                        <input type="checkbox"/>
                                        I agree to the
                                        <a href="https://easyeat.ancorathemes.com/privacy-policy/" target="_blank">Privacy
                                            Policy</a>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            {/*FOOTER*/}
            <Footer/>
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>
        </div>
    )
}
