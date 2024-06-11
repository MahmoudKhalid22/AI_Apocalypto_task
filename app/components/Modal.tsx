"use client";
import Moralis from "moralis";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Modal({ data, onClose }: any) {
  return (
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50  flex items-start justify-center z-50">
      <div className="bg-pink-200 p-4 w-full max-w-4xl mx-auto flex rounded-lg shadow-lg mt-10 relative  md:flex-row flex-col h-auto">
        <div className="flex-1 w-full md:w-1/2">
          {data?.collection_logo && (
            <Image
              className="w-full h-full object-contain rounded-lg"
              src={data?.collection_banner_image}
              width={200}
              height={400}
              alt="Image"
            />
          )}
        </div>
        <div className="flex-1 w-full md:w-1/2 bg-pink-300 my-2 p-8 rounded-lg md:ml-4 relative">
          <button
            className="absolute top-4 right-4 text-3xl text-black hover:text-gray-700"
            onClick={() => onClose(false)}
          >
            &times;
          </button>
          <h2 className="text-black text-2xl font-bold mb-4">{data?.name}</h2>
          <div className="flex flex-wrap gap-4 text-sm text-black">
            <div className="bg-pink-200 p-2 rounded w-fit">
              <strong>Block Number</strong>
              <br />
              {data?.block_number}
            </div>
            <div className="bg-pink-200 p-2 rounded w-fit">
              <strong>NAME</strong>
              <br />
              {data?.name}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>contract_type</strong>
              <br />
              {data?.contract_type}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>last_metadata_sync</strong>
              <br />
              {data?.last_metadata_sync}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>last_token_uri_sync</strong>
              <br />
              {data?.last_token_uri_sync}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll md:overflow-auto">
              <strong>owner_of</strong>
              <br />
              {data?.owner_of}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>symbol</strong>
              <br />
              {data?.symbol}
            </div>
            <div className="bg-pink-200 p-2 rounded overflow-x-scroll md:overflow-auto">
              <strong>token_address</strong>
              <br />
              {data?.token_address}
            </div>
            <div className="bg-pink-200 p-2 rounded">
              <strong>token_hash</strong>
              <br />
              {data?.token_hash}
            </div>
            <div className="bg-pink-200 p-2 rounded w-full">
              <strong>token_uri</strong>
              <br />
              <span className="w-full block overflow-x-scroll">
                {data?.token_uri}
              </span>
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
