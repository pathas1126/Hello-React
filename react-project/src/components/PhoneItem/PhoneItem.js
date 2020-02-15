import React from "react";
import styles from "./PhoneItem.module.scss";

const PhoneItem = () => {
  return (
    <div className={styles.phone_item}>
      <div className={styles.phone_item_left}>
        <div className={styles.phone_item_name}>홍길동</div>
        <div className={styles.phone_item_phone}>010-2222-4444</div>
      </div>
      <div className={styles.phone_item_rightg}>
        <button>삭제</button>
      </div>
    </div>
  );
};

export default PhoneItem;
