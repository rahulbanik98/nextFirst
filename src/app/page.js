"use client";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setdata] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });

  const fetchData = async () => {
    const body = {
      inputData: {
        storeslug: "rose-fast-food",
        product_Id: "6183775",
      },
    };

    axios
      .post("https://webservice.dineapi.com/api/dine/storedata", body)
      .then((response) => {
        console.log(response, "response");
        setdata({
          title: response?.data?.store?.store_Name,
          description: response?.data?.store?.store_Banner,
          imageUrl: response?.data?.store?.store_Banner_Image,
        });
      });
  };

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Rose Fast Food</title>
        <meta
          name="title"
          content="Rose Fast Food
"
        />
        <meta
          name="description"
          content="We aim to bring all of our customers the best value for money, services and food around.
"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Rose Fast Food
"
        />
        <meta
          property="og:description"
          content="We aim to bring all of our customers the best value for money, services and food around.
"
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Rose Fast Food
"
        />
        <meta
          property="twitter:description"
          content="We aim to bring all of our customers the best value for money, services and food around.
"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Head>
      <div
        style={{
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            fontWeight: "800",
          }}
        >
          Store details
        </div>
        <div>{data?.title}</div>

        <div>{data?.description}</div>
        {/* <Image
          src={data?.imageUrl}
          alt={`${data?.title} image`}
          width={180}
          height={37}
        /> */}
      </div>
    </main>
  );
}

{
  /* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */
}