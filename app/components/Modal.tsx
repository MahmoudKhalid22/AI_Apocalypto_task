"use client";
import Moralis from "moralis";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Modal({ data, onClose, isOpen }: any) {
  console.log(data);
  const {
    amount,
    blockNumberMinted,
    contractType,
    lastMetadataSync,
    lastTokenUriSync,
    metadata,
    name,
    ownerOf,
    possibleSpam,
    symbol,
    tokenAddress,
    tokenHash,
    tokenUri,
  } = data._data;
  console.log(blockNumberMinted?.value);
  // console.log(attributes);
  return (
    <div
      className={`fixed w-full  top-1/2 -translate-y-1/2 right-0 bg-opacity-50
      h-auto transition-all
      rounded-lg overflow-y-scroll
      overflow-x-hidden
      z-50`}
    >
      <div className="relative bg-[#093e79] px-4 w-full max-w-4xl mx-auto flex rounded-lg shadow-lg  flex-col  h-auto items-center">
        <div className="w-full flex justify-center">
          <Image
            className="object-contain rounded-lg"
            src={metadata?.image}
            width={150}
            height={150}
            alt="Image"
          />
        </div>
        <div className="flex-1 w-full bg-[#00d4ff] my-2 p-8 rounded-lg md:ml-4 relative">
          <button
            className="absolute top-4 right-4 text-6xl text-black hover:text-gray-700
            "
            onClick={() => onClose(false)}
          >
            &times;
          </button>
          <h2 className="text-black text-2xl font-bold mb-4">{data?.name}</h2>
          <div className="grid grid-cols-3 gap-4 text-sm text-black">
            {blockNumberMinted?.value && (
              <div className="bg-pink-200 p-2 rounded w-fit">
                <strong>Block Number</strong>
                <br />
                {blockNumberMinted?.value}
              </div>
            )}
            <div className="bg-pink-200 p-2 rounded w-fit overflow-x-scroll">
              <strong>GENERAL NAME</strong>
              <br />
              {name}
            </div>
            <div className="bg-pink-200 p-2 rounded w-fit">
              <strong>AMOUNT</strong>
              <br />
              {amount}
            </div>
            <div className="bg-pink-200 p-2 rounded w-fit">
              <strong>ATTRIBUTES</strong>
              <br />
              {metadata?.attributes?.map((attribute: string) => (
                <p key={attribute}>{attribute}</p>
              ))}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll">
              <strong>DISCRIPTION</strong>
              <br />
              {metadata?.description}
            </div>
            <div className="bg-pink-200 p-2 rounded ">
              <strong>NAME</strong>
              <br />
              {metadata?.name}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll">
              <strong>CONTRACT TYPE</strong>
              <br />
              {contractType}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll">
              <strong>LAST METADATA SYNC</strong>
              <br />
              {lastMetadataSync.toString()}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll">
              <strong>LAST TOKEN URI SYNC</strong>
              <br />
              {lastTokenUriSync.toString()}
            </div>
            {ownerOf && (
              <div className="bg-pink-200 p-2 rounded overflow-x-scroll md:overflow-auto">
                <strong>OWNER OF</strong>
                <br />
                {ownerOf}
              </div>
            )}
            <div className="bg-pink-200 p-2 rounded">
              <strong>SYMBOL</strong>
              <br />
              {symbol}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>POSSIBLE SPAM</strong>
              <br />
              {possibleSpam ? "yes" : "no"}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll md:overflow-auto">
              <strong>TOKEN ADDRESS</strong>
              <br />
              {tokenAddress?._value}
            </div>
            <div className="bg-pink-200 p-2 rounded  overflow-x-scroll">
              <strong>TOKEN HASH</strong>
              <br />
              {tokenHash}
            </div>
            <div className="bg-pink-200 p-2 rounded w-full">
              <strong>TOKEN URI</strong>
              <br />
              <span className="w-full block overflow-x-scroll">{tokenUri}</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4">
            {/* <button
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => onClose(false)}
            >
              Close
            </button> */}
          </div>
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fab fa-circle"></i>
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fab fa-eye"></i>
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <i className="fab fa-fire"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
