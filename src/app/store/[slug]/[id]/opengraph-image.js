import { ImageResponse } from "next/server";

export const runtime = "edge";

export const alt = "About Acme";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }) {
  console.log(params);
  const data = await fetch(
    "https://webservice.dineapi.com/api/dine/storedata",
    {
      method: "POST",
     

      //    method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        inputData: {
          storeslug: params.slug,
          product_Id: params.id,
        },
      }),
    }
  );
  const data1 = await data.json();

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <img src={data1?.store?.store_Banner_Image} alt={data1?.store?.store_Name} />
      </div>
    ),
    {
      ...size,
    }
  );
}
