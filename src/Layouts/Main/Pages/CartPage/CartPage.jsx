import React, {useContext, useEffect, useState} from 'react'
import styles from "./CartPage.module.scss";
import {LayoutContext} from "../../../../Context/LayoutContext/LayoutContext.jsx";
import {Header} from "../../Components/Header/Header.jsx";
import {UiControl} from "../../Common/UiControl/UiControl.jsx";
import {PageNameSection} from "../../Common/PageNameSection/PageNameSection.jsx";
import {ChangedFooter} from "../../Components/ChangedFooter/ChangedFooter.jsx";
import {ArrowRight, CaretDown, CaretUp, Ticket, X} from "@phosphor-icons/react";

export const CartPage = () => {
    const {
        setBasketVisible,
    } = useContext(LayoutContext);


    const [cartCounter, setCartCounter] = useState(1);

    const handleCounter = (count) => {
        setCartCounter(prevState => prevState + count);
    }
    const {
        setHeaderColorChange,
    } = useContext(LayoutContext);

    // useEffect TO CHANGE HEADER COLOR
    useEffect(() => {
        setHeaderColorChange(true);
    }, []);

    // useEffect to TURN BASKET BUTTON OFF
    useEffect(() => {
        setBasketVisible(false);
    }, []);

    return (
        <div className={styles.cartPageWrapper}>
            <Header/>
            <PageNameSection title="Cart"/>
            <section className={styles.cartSection}>
                <div className={styles.cartContent}>
                    {/*<div className={styles.cartIsEmpty}>*/}
                    {/*    <p>Your cart is currently empty.</p>*/}
                    {/*    <a href="#">Return to shop</a>*/}
                    {/*</div>*/}
                    <form action="https://easyeat.ancorathemes.com/cart/" method="post" className={styles.cartBasket}>
                        <div className={styles.cartHeading}>
                            <div className={styles.cartHeadingItem}>
                                <span className={styles.activeBox}>1</span>
                                <p>Shopping Cart
                                    <ArrowRight/>
                                </p>

                            </div>
                            <div className={styles.cartHeadingItem}>
                                <span>2</span>
                                <p>Payment & Delivery Options
                                    <ArrowRight/>
                                </p>

                            </div>
                            <div className={styles.cartHeadingItem}>
                                <span>3</span>
                                <p>Order Received
                                </p>

                            </div>
                        </div>
                        <div className={styles.cartBody}>
                            <div className={styles.cartRow} style={{background: 'white',borderColor: "transparent"}}>
                                <div className={styles.productName}>
                                    Product
                                </div>
                                <div className={styles.productPrice}>
                                    Price
                                </div>
                                <div className={styles.productQuantity}>
                                    Quantity
                                </div>
                                <div className={styles.productSubtotal}>
                                    Subtotal
                                </div>
                                <div className={styles.productRemove}>
                                    Remove
                                </div>
                            </div>
                            <div className={styles.cartRow}>
                                <div className={styles.productName}>
                                    <span className={styles.productNameInner}>
                                        <a href="#">
                                            <img
                                                src="https://easyeat.ancorathemes.com/wp-content/uploads/2020/05/product-4-copyright-480x480.png"
                                                alt="Product"/>
                                        </a>
                                        <a href="#">Black Burger</a>
                                    </span>
                                </div>
                                <div className={styles.productPrice}>
                                    <span>$89.00</span>
                                </div>
                                <div className={styles.productQuantity}>
                                    <div className={styles.productCount}>
                                        <p>{cartCounter}</p>
                                        <div className={styles.counterControl}>
                                            <span onClick={() => handleCounter(+1)}>
                                                <CaretUp/>
                                            </span>
                                            <span onClick={cartCounter > 0 ? () => handleCounter(-1) : null}>
                                                <CaretDown/>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.productSubtotal}>
                                    <span>$178.00</span>
                                </div>
                                <div className={styles.productRemove}>
                                    <span>
                                        <X weight="thin"/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.cartRow}>
                                <div className={styles.productName}>
                                    <span className={styles.productNameInner}>
                                        <a href="#">
                                            <img
                                                src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-pink-cute-hamburger-png-image_13383224.png"
                                                alt="Product"/>
                                        </a>
                                        <a href="#">Pink Burger</a>
                                    </span>
                                </div>
                                <div className={styles.productPrice}>
                                    <span>$22.00</span>
                                </div>
                                <div className={styles.productQuantity}>
                                    <div className={styles.productCount}>
                                        <p>{cartCounter}</p>
                                        <div className={styles.counterControl}>
                                            <span onClick={() => handleCounter(+1)}>
                                                <CaretUp/>
                                            </span>
                                            <span onClick={cartCounter > 0 ? () => handleCounter(-1) : null}>
                                                <CaretDown/>
                                            </span>

                                        </div>
                                    </div>
                                </div>
                                <div className={styles.productSubtotal}>
                                    <span>$44.00</span>
                                </div>
                                <div className={styles.productRemove}>
                                    <span>
                                        <X weight="thin"/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cartBottom}>
                            <div className={styles.couponBlock}>
                                <span>
                                    <Ticket weight="thin" style={{transform: "rotate(-45deg)"}}/>
                                    <input type="text" placeholder="Coupon Code"/>
                                </span>
                                <button type="submit">Apply Coupon</button>
                            </div>
                            <div className={styles.buttonBlock}>
                                <a href="#">
                                    Continue Shopping
                                </a>
                                <button type="submit">Update Cart</button>
                            </div>
                        </div>
                        <div className={styles.cartTotal}>
                            <div className={styles.cartTotalContent}>
                                <div className={styles.cartTotalHeading}>
                                    <p>Cart Totals</p>
                                </div>
                                <div className={styles.cartTotalBody}>
                                    <div className={styles.cartTotalRow}>
                                        <div className={styles.cartTotalTitle}>
                                            Subtotal
                                        </div>
                                        <div className={styles.cartTotalPrice}>
                                            $24.00
                                        </div>
                                    </div>
                                    <div className={styles.cartTotalRow}>
                                        <div className={styles.cartTotalTitle}>
                                            Total
                                        </div>
                                        <div className={styles.cartTotalPrice}>
                                            $24.00
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.cartTotalButton}>
                                    <a href="#">Proceed to checkout</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            {/*FOOTER*/}
            <ChangedFooter/>
            {/*COMMON COMPONENTS FOR UI */}
            <UiControl/>

        </div>
    )
}
