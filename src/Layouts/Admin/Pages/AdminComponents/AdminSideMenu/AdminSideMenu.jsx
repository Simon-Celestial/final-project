import React, {useContext, useState} from 'react'
import styles from "./AdminSideMenu.module.scss";
import {
    Browser,
    Browsers,
    DiamondsFour,
    Hamburger,
    ListNumbers,
    SkipBack,
    UsersThree
} from "@phosphor-icons/react";
import {Link} from "react-router-dom";
import {LayoutContext} from "../../../../../Context/LayoutContext/LayoutContext.jsx";

export const AdminSideMenu = () => {
    const {
        adminSideMenuOpen,
        setAdminSideMenuOpen,
        openHandler,
    } = useContext(LayoutContext);
    const [pagesDropDownVisible,setPagesDropDownVisible] = useState(false);

    return (
        <section className={`${styles.adminSideMenuSection} ${!adminSideMenuOpen && styles.adminSideMenuActive}`}>
            <div className={styles.sideMenuButton} onClick={openHandler(setAdminSideMenuOpen)}>
                <SkipBack  />
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/admin/dashboard" className={styles.sideMenuElement}>
                    <Browser  />
                    Dashboard</Link>
            </div>

            <div className={styles.sideMenuItem}>
                <Link to="/admin/products" className={styles.sideMenuElement}>
                    <Hamburger/>
                    Products</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/admin/brands" className={styles.sideMenuElement}>
                    <DiamondsFour/>
                    Brands</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/admin/orders" className={styles.sideMenuElement}>
                    <ListNumbers/>
                    Orders</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <Link to="/admin/staff" className={styles.sideMenuElement}>
                    <UsersThree/>
                    Staff</Link>
            </div>
            <div className={styles.sideMenuItem}>
                <div className={styles.sideMenuElement} onClick={openHandler(setPagesDropDownVisible)}>
                    <Browsers/>
                    Pages</div>
                <div className={`${styles.pagesDropDown} ${pagesDropDownVisible && styles.pagesDropDownActive}`} >
                    <Link to="/home">- Home</Link>
                    <Link to="/shop">- Shop</Link>
                    <Link to="/cart">- Cart</Link>
                    <Link to="/auth/checkout">- Checkout</Link>
                    <Link to="/wishlist">- Wishlist Page</Link>
                </div>
            </div>
        </section>
    )
}
