import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import TelephoneItem from "../TelephonesItem/TelephoneItem";
import { getTelephones } from "../../actions/telephoneAction";
import { loadTelephones } from "../../api/api";
import styles from "./TelephoneList.module.css";

function TelephoneList(): JSX.Element {
  const telephoneList = useSelector(
    (store: RootState) => store.telephone.telephoneList
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadTelephones()
      .then(data => {
        console.log(data);
        dispatch(getTelephones(data));
      })
      .catch(e => console.log(e));
  }, [dispatch]);

  return (
    <div className={styles.list}>
      {telephoneList.length ? (
        <>
          <div className={styles.row}>
            <span className={styles.row__index}>№</span>
            <span className={styles.row__number}>Номер</span>
            <span className={styles.row__country}>Страна</span>
            <span className={styles.row__flag}>Флаг</span>
          </div>
          <ul className={styles.ul}>
            {telephoneList.map((telephone, index) => (
              <TelephoneItem
                key={telephone.id}
                number={telephone.number}
                index={index + 1}
                code={telephone.code}
                countryName={telephone.countryName}
                flag={telephone.flag}
              />
            ))}
          </ul>
        </>
      ) : (
        <h1 className={styles.h1}>No Telephones</h1>
      )}
    </div>
  );
}

export default TelephoneList;
