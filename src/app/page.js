"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { NextSeo } from "next-seo"

function Home() {
  
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
    fetchData();
    
  }, []);

  return (
    <>
    {/* <NextSeo
       title="Using More of Config"
       description="This example uses more of the available config options."
       canonical="https://www.canonical.ie/"
       openGraph={{
         url: 'https://www.url.ie/a',
         title: 'Open Graph Title',
         description: 'Open Graph Description',
         images: [
           {
             url: imageUrl,
             width: 800,
             height: 600,
             alt: 'Og Image Alt',
             type: 'image/jpeg',
           },
      
         ],
         siteName: 'SiteName',
       }}
       twitter={{
         handle: '@handle',
         site: '@site',
         cardType: 'summary_large_image',
       }}
    /> */}
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     
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
      </div>
    </main>
    </>
  );
}


export default Home;

// import axios from "axios";

// export async function getPostBySlug() {
//   const body = {
//     inputData: {
//       storeslug: "rose-fast-food",
//       product_Id: "6183775",
//     },
//   };
//   axios
//     .post("https://webservice.dineapi.com/api/dine/storedata", body)
//     .then((response) => {
//        console.log(response.data);
//       return {
//      //    props: {
//      //      store: {
//             title: response?.data?.store?.store_Name,
//             description: response?.data?.store?.store_Banner,
//             imageUrl: response?.data?.store?.store_Banner_Image,
//      //      },
//      //    },
//       };
//     });
// }
