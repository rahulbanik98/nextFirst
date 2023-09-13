import React from "react";
// import { getPostBySlug } from "@/app/api/getData";
import { ImageResponse } from "next/server";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

export default async function og() {
//   const data = await getPostBySlug()

//   console.log(data,"data")

  return new ImageResponse(
    (
      <div tw="relative flex items-center justify-center">
        <img src={data?.imageUrl} alt={data?.title} />
        <div tw="absolute flex bg-black opacity-50 inset-0 " />
        <div tw="absolute flex items-center top-2 w-full ">
          <p tw="text-white text-4xl flex font-bold m-5">{data?.description}</p>
        </div>
      </div>
    ),
    size
  );
}
