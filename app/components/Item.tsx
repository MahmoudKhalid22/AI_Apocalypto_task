import React, { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";

function Item({ item, id }: any) {
  // console.log(item._data);
  const {
    tokenAddress,
    tokenId,
    amount,
    tokenHash,
    possibleSpam,
    symbol,
    ownerOf,
    name,
    metadata,
    lastMetadataSync,
    lastTokenUriSync,
    contractType,
    chain,
  } = item?._data;

  console.log(metadata);

  const [isModal, setIsModal] = useState(false);

  const handleClose = (state: boolean) => {
    setIsModal(state);
  };

  return (
    <div className="overflow-hidden">
      {isModal && <Modal data={item} onClose={handleClose} isOpen={isModal} />}
      <div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-[#ececec] hover:-translate-y-4 transition-transform cursor-pointer"
        key={item?.token_address}
        onClick={() => setIsModal(true)}
      >
        <Image
          className="w-full"
          src={metadata?.image}
          alt={metadata?.name}
          width={50}
          height={50}
        />
        <div className="px-6 py-4">
          <p>{item?.name}</p>
        </div>
        <p className="px-6 py-1">{item?.possible_spam}</p>
        <p className="px-6 py-1">{item?.contract_type}</p>
      </div>
    </div>
  );
}

export default Item;
