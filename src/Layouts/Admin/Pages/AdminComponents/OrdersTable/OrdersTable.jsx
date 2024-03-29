import React from 'react'
import styles from "./OrdersTable.module.scss";
import {OrdersTableRows} from "./OrdersTableRows/OrdersTableRows.jsx";
import {CircleDashed} from "@phosphor-icons/react";

export const OrdersTable = ({
                                orders,
                                updateOrder,
                                pagination,
                                loading
                            }) => {
    return (
        <div className={styles.ordersWrapper}>
            <div className={styles.blockTitleContent}>

                <div className={styles.tableBlock}>
                    <div className={`${styles.tableRow} ${styles.tableHeading}`}>
                        <div className={`${styles.invoiceNumber} ${styles.tableBox}`}>
                            INVOICE NO
                        </div>
                        <div className={`${styles.orderTime} ${styles.tableBox}`}>
                            ORDER TIME
                        </div>
                        <div className={`${styles.customerName} ${styles.tableBox}`}>
                            CUSTOMER NAME
                        </div>
                        <div className={`${styles.method} ${styles.tableBox}`}>
                            METHOD
                        </div>
                        <div className={`${styles.amount} ${styles.tableBox}`}>
                            AMOUNT
                        </div>
                        <div className={`${styles.status} ${styles.tableBox}`}>
                            STATUS
                        </div>

                        {updateOrder && <div className={`${styles.action} ${styles.tableBox}`}
                       >
                            ACTION
                        </div>
                        }
                        <div className={`${styles.viewInvoice} ${styles.tableBox}`}>
                            INVOICE
                        </div>
                    </div>

                    {
                        !loading &&
                        (orders || []).map((order, _id) =>
                            <OrdersTableRows
                            key={_id} order={order}
                            updateOrder={updateOrder}/>)
                    }
                </div>
                {loading &&
                    <div className={styles.ordersLoader}>
                        <CircleDashed />
                    </div>
                }
            </div>
            {updateOrder && pagination}
        </div>

    )
}
