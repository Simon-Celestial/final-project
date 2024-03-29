import React, {useCallback, useEffect, useState} from 'react'
import styles from "./ProductsMenu.module.scss";
import {CircleDashed, Power} from "@phosphor-icons/react";
import useApi from "../../../../../Hooks/useApi.js";
import {Bounce, toast} from 'react-toastify';

export const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = function (error) {
            reject(error)
        };
    });
};

const initialState = {
    id: null,
    title: '',
    description: '',
    salePrice: '',
    productPrice: '',
    brandId: '',
    stock: '',
    isPublish: false,
    images: [],
}
export const ProductsMenu = ({
                                 productsMenuOpen,
                                 setProductsMenuOpen,
                                 editMode,
                                 brands,
                                 update,
                                 selectedItem
                             }) => {
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState(selectedItem || initialState);
    const {
        id,
        title,
        description,
        salePrice,
        productPrice,
        brandId,
        stock,
        images,
        isPublish,
    } = state;

    const updateField = useCallback((field, val) => {
        setState(prev => ({
            ...prev,
            [field]: val,
        }))
    }, [])
    const {
        POST: saveProduct,
        PUT: updateProduct,
    } = useApi('dashboard/products');

    useEffect(() => {
        if (selectedItem) setState(selectedItem);
    }, [selectedItem]);
    const handleSave = useCallback(async () => {
        try {
            setLoading(true);
            const {
                id,
                ...reqData
            } = state;

            if (id === null) {
                const result = await saveProduct(null, reqData);
                if (result.status === 200) {
                    toast.success(`Product Added`,
                        {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        }
                    );

                    setProductsMenuOpen(false);
                    setState(initialState);
                    update();
                } else {
                    toast.error(`Add full information`,
                        {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        }
                    );

                }
            } else {
                const result = await updateProduct(id, reqData);

                if (result.status === 200) {
                    toast.success(`Product Updated`,
                        {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        }
                    );

                    setProductsMenuOpen(false);
                    setState(initialState);
                    update();
                } else {
                    toast.error(`Something is wrong`,
                        {
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            transition: Bounce,
                        }
                    );

                }
            }
        } catch (e) {
            toast.error(`${e}`,
                {
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                }
            );


        } finally {
            setLoading(false);
        }

    }, [editMode, state]);

    const handleAcceptImage = useCallback(async (e) => {
        const file = e.target.files[0];
        if (file.size > 1000 * 1000 * 150) {
            toast.error('File is too big');
            e.target.value = '';
            return;
        }
        if (file.size < 1000 * 5) {
            toast.error('File is too small');
            e.target.value = '';
            return;
        }
        const result = await getBase64(file);
        setState((prev) => ({
            ...prev,
            images: [...prev.images, result],
        }))

    }, [])

    return (
        <div className={`${styles.productsMenuOverlay} ${productsMenuOpen && styles.menuActive}`}>
            <div className={styles.productsMenuContent}>
                {loading &&
                    <div className={styles.loadingOverlay}>
                        <CircleDashed/>
                    </div>
                }
                <div className={styles.menuHead}>
                    <div className={styles.headTitle}>
                        <h2>{editMode ? "Edit Product" : "Add Product"}</h2>
                        <p>{editMode ? "Edit your product" : "Add your Product"}</p>
                    </div>
                    <div className={styles.closeMenu} onClick={() => setProductsMenuOpen(false)}>
                        <Power/>
                    </div>
                </div>
                <div className={styles.menuMain}>
                    <div className={styles.elementsRow}>
                        <p>Product Name:</p>
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={title}
                            onChange={({target}) => updateField('title', target.value)}
                        />
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Description:</p>
                        <textarea
                            placeholder="Product Description"
                            value={description}
                            onChange={({target}) => updateField('description', target.value)}
                        />
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Image:</p>
                        <div className={styles.imagesBox}>
                            {
                                images.map((image, i) => (<div className={styles.image}>
                                    <img
                                        key={i}
                                        src={typeof image === "string" ? image : image.url}
                                        alt="Image"
                                        onClick={() => setState((prev) => ({
                                            ...prev,
                                            images: prev.images.filter((it, j) => j !== i),
                                        }))}
                                    />
                                </div>))
                            }
                        </div>
                        <div className={styles.fileAddWrapper}>
                            <input
                                type="file"
                                onChange={handleAcceptImage}
                                accept={'image/png, image/jpeg'}
                            />
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Brand:</p>
                        <select value={brandId} onChange={e => updateField('brandId', e.target.value)}>
                            <option value="" hidden>Select Category</option>
                            {
                                brands.map(it => (<option
                                    key={it.value}
                                    value={it.value}>{it.label}
                                </option>))
                            }
                        </select>

                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Price:</p>
                        <div className={styles.priceBox}>
                            <input
                                type="text"
                                placeholder="Product Price"
                                value={productPrice}
                                onChange={({target}) => updateField('productPrice', target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Sale Price:</p>
                        <div className={styles.priceBox}>
                            <input
                                type="text"
                                placeholder="Sale Price"
                                value={salePrice}
                                onChange={({target}) => updateField('salePrice', target.value)}
                            />
                        </div>
                    </div>
                    <div className={styles.elementsRow}>
                        <p>Product Quantity:</p>
                        <input
                            type="text"
                            placeholder="Product Quantity"
                            value={stock}
                            onChange={({target}) => updateField('stock', target.value)}
                        />
                    </div>
                    <div className={`${styles.elementsRow} ${styles.publishElementRow}`}>
                        <p>Published:</p>
                        <input
                            className={styles.publishCheck}
                            type="checkbox"
                            placeholder="Product Quantity"
                            checked={isPublish}
                            onChange={({target}) => updateField('isPublish', target.checked)}
                        />
                    </div>
                </div>
                <div className={styles.menuButtons}>
                    <div className={styles.button} onClick={() => setProductsMenuOpen(false)}>Cancel</div>
                    <button
                        disabled={loading}
                        className={styles.button}
                        onClick={handleSave}>{editMode ? "Edit Product" : "Add Product"}</button>
                </div>

            </div>
        </div>
    )
}
