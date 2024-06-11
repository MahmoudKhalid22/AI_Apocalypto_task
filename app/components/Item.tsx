import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

function Item({ item, id }: any) {
  console.log(item);
  const [isModal, setIsModal] = useState(false);

  console.log(id);

  const handleClose = (state: boolean) => {
    setIsModal(state);
  };

  return (
    <>
      {isModal && <Modal data={item} onClose={handleClose} />}
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-[#ececec] hover:-translate-y-4 transition-transform cursor-pointer w-[20rem] h-[30rem]"
        key={item?.token_address}
        onClick={() => setIsModal(true)}
      >
        {item?.collection_logo && (
          <Image
            className="w-full"
            alt={item?.name}
            src={item?.collection_logo}
            width={50}
            height={50}
          />
        )}
        <div className="px-6 py-4">
          <p>{item?.name}</p>
        </div>
        <p className="px-6 py-1">{item?.possible_spam}</p>
        <p className="px-6 py-1">{item?.contract_type}</p>
      </div>
    </>
  );
}

export default Item;
