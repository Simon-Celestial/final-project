import React, {useCallback, useContext, useEffect, useState} from 'react'
import useApi from "../../Hooks/useApi.js";
import {AuthContext} from "../AuthContext/AuthContext.jsx";


export const UserDataContext = React.createContext({
    basket:{},
    setBasket: () => {},
    wishlist: {},
    setWishlist: () => {},
    remove: () => {},
    update: () => {},

})
export const UserDataContextProvider = ({
                                            children,
                                        }) => {
    const [basket, setBasket] = useState({});
    const [wishlist, setWishlist] = useState({});
    const [shouldUpdate, setShouldUpdate] = useState(Date.now());
    const {
        GET,
        DELETE,
        PUT,
        POST,
    } = useApi('site/basket');
    const {
        token,
    } = useContext(AuthContext);
    useEffect(() => {
        if (!token)
            localStorage.basket = JSON.stringify(basket);
    }, [basket]);
    useEffect(() => {
        localStorage.wishlist = JSON.stringify(wishlist);
    }, [wishlist]);

    useEffect(() => {
        if (token) {
            GET().then(result => {
                if (result.status === 200) {
                    setBasket(JSON.parse(result.data).data)
                }
            })
        } else {
            setBasket(JSON.parse(localStorage.basket || '{}'))
        }
    }, [token, shouldUpdate]);


    const update = useCallback((id, count) => {
        if (token) {
            PUT(id, {productCount: count}).then(res => {
                if (res.status === 200) {
                    setShouldUpdate(Date.now());
                }
            })
        } else {
            setBasket(prev => ({
                ...prev, [id]:count
            }));
        }
    }, [token]);
    const remove = useCallback((id) => {
        if (token) {
            DELETE(id).then(res => {
                if (res.status === 200) {
                    setShouldUpdate(Date.now());
                }
            })
        } else {
            setBasket(prev => {
                const newData = {...prev};
                delete prev[id];
                return newData;
            });
        }

    }, [])

    return (
        <UserDataContext.Provider value={{
            basket,
            setBasket,
            wishlist,
            setWishlist,
            remove,
            update,
        }}>
            {children}
        </UserDataContext.Provider>
    )
}