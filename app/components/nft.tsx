"use client";
import Moralis from "moralis";
import { useEffect, useState } from "react";
import Item from "./Item";
import Image from "next/image";

function Collections() {
  const [collections, setCollections] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [cursor, setCursor] = useState("");
  const [data, setData] = useState<any>([]);
  //   const [error, setError] = useState(false);
  // useEffect(() => {
  //   async function getData() {
  //     setLoading(true);
  //     try {
  //       const response = await Moralis.EvmApi.nft.getContractNFTs({
  //         chain: "0x1",
  //         format: "decimal",
  //         address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  //         cursor: cursor ? cursor : undefined,
  //         limit: 20,
  //       });
  //       setLoading(false);
  //       // console.log(response.raw);
  //       setCollections(response.raw);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   getData();
  // }, [cursor]);
  // console.log(collections);

  const fetchNft = async () => {
    let res;
    setLoading(true);
    await Moralis.start({
      apiKey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjA2ZjE1NTEzLTQyOTEtNDE1MS04ZWI3LTYwOTVhMGFkOTZlMSIsIm9yZ0lkIjoiMzk1OTM5IiwidXNlcklkIjoiNDA2ODU0IiwidHlwZUlkIjoiYzk3OWZiOTYtOGQzNC00YTkwLWI4MDEtYTBmNGZhNTdlMzEwIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTgwOTA2NzYsImV4cCI6NDg3Mzg1MDY3Nn0.gFf0RjbLejqcKHmANX_Eh489vtkFSQ-z9r-7fWzen2Y",
    });
    res = await Moralis.EvmApi.nft.getContractNFTs({
      chain: "0x1",
      format: "decimal",
      address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      limit: 20,
    });
    setLoading(false);
    setCollections(res);
    setData(res?.result);
  };

  const fetchNftCursor = async () => {
    setLoading(true);
    const res = await Moralis.EvmApi.nft.getContractNFTs({
      chain: "0x1",
      format: "decimal",
      address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
      cursor: cursor,
      limit: 30,
    });
    setLoading(false);
    console.log(res);
    setCollections(res!.pagination.cursor);
    // setCollections(res.pagination!.jsonResponse.result);
    setData([...data, res?.result]);
  };

  console.log(data);

  return (
    <div>
      <h1 className="text-center mb-12 mt-4 text-3xl text-white font-semibold">
        Collections
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-12">
        {loading && (
          <p className="text-center text-white uppercase">loading...</p>
        )}
        {!loading &&
          data?.map((item: any, i: number) => (
            // console.log(item);
            <Item item={item} id={i} key={item?.token_address} />
          ))}
      </div>
      {!loading && (
        <>
          {data.length === 0 && (
            <button
              onClick={fetchNft}
              className="bg-white mx-auto my-8 py-2 px-4 block"
            >
              Get NFTs
            </button>
          )}
          {/* {data.length > 0 && (
            <button
              className="bg-white mx-auto my-8 py-2 px-4 block"
              onClick={() => {
                setCursor(collections?.cursor);
                fetchNftCursor();
              }}
            >
              Load More
            </button>
          )} */}
        </>
      )}
    </div>
  );
}

export default Collections;
