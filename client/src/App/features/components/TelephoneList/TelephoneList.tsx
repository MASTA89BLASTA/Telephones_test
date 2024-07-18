import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/store";
import TelephoneItem from "../TelephonesItem/TelephoneItem";
import { getTelephones } from "../../actions/telephoneAction";
import { loadTelephones } from "../../api/api";

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
    <div>
      <ul>
        {telephoneList.length ? (
          telephoneList.map((telephone, index) => (
            <TelephoneItem
              key={telephone.id}
              number={telephone.number}
              index={index}
              code={telephone.code}
            />
          ))
        ) : (
          <h1>No Telephones</h1>
        )}
      </ul>
    </div>
  );
}

export default TelephoneList;
