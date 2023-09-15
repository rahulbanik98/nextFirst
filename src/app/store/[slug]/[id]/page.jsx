import React from "react";
// import { getPostBySlug } from "@/app/api/getData";

export default async function Page({ params }) {
  //   const data = await  getPostBySlug();

  const data = await fetch(
    "https://webservice.dineapi.com/api/dine/storedata",
    {
      method: "POST",
      //    body: JSON.stringify(body),
      //    method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        inputData: {
          storeslug: params.slug,
          product_Id: params.id,
        },
      }), // body data type must match "Content-Type" header
    }
  );

  const data1 = await data.json();


  return (
    <div className="flex-col justify-center items-center h-screen ">
      <div>{data1?.store?.store_Name}</div>
      <div>{ data1?.store?.store_Banner }</div>
      <img 
      src={data1?.store?.store_Banner_Image}
      />
    </div>
  );
}

export async function generateMetadata({ params }) {
  const data = await fetch(
    "https://webservice.dineapi.com/api/dine/storedata",
    {
      method: "POST",
      //    body: JSON.stringify(body),
      //    method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
        inputData: {
          storeslug: params.slug,
          product_Id: params.id,
        },
      }), // body data type must match "Content-Type" header
    }
  );
  const data1 = await data.json();

  return {
    title: data1?.store?.store_Name,
    openGraph: {
      type: "website",
      url: "https://main--next-seo-test.netlify.app",
      title: data1?.store?.store_Name,
      description: data1?.store?.store_Banner,

      site_name: "SiteName",
      locale: "en_IE",
    },
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: "summary_large_image",
      title: data1?.store?.store_Name,
      description: data1?.store?.store_Banner,
    },
  };
}
