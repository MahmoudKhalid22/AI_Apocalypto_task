"use client";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import Item from "./Item";
import Image from "next/image";

function Collections() {
  const [collections, setCollections] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        await Moralis.start({
          apiKey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA2ZjE1NTEzLTQyOTEtNDE1MS04ZWI3LTYwOTVhMGFkOTZlMSIsIm9yZ0lkIjoiMzk1OTM5IiwidXNlcklkIjoiNDA2ODU0IiwidHlwZUlkIjoiYzk3OWZiOTYtOGQzNC00YTkwLWI4MDEtYTBmNGZhNTdlMzEwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTgwOTA2NzYsImV4cCI6NDg3Mzg1MDY3Nn0.gFf0RjbLejqcKHmANX_Eh489vtkFSQ-z9r-7fWzen2Y",
        });

        const response = await Moralis.EvmApi.nft.getMultipleNFTs({
          chain: "0x1",
          tokens: [
            {
              tokenAddress: "0xa4991609c508b6d4fb7156426db0bd49fe298bd8",
              tokenId: "12",
            },
            {
              tokenAddress: "0x3c64dc415ebb4690d1df2b6216148c8de6dd29f7",
              tokenId: "1",
            },
            {
              tokenAddress: "0x3c64dc415ebb4690d1df2b6216148c8de6dd29f7",
              tokenId: "200",
            },
          ],
        });
        setLoading(false);
        // console.log(response.raw);
        setCollections(response.raw);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);
  console.log(loading);
  return (
    <div>
      <h1>Collections</h1>
      <div className="flex items-center justify-center gap-12">
        {loading && <p className="text-center">loading...</p>}
        {!loading &&
          collections?.map((item: any, i: number) => (
            // console.log(item);
            <Item item={item} id={i} key={item?.token_address} />
          ))}
      </div>
    </div>
  );
}

export default Collections;
