import { ImageResponse } from "next/server";
import axios from "axios";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET() {
  try {
    const body = {
      inputData: {
        storeslug: "rose-fast-food",
        product_Id: "6183775",
      },
    };

    const res = await fetch(
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
        body: JSON.stringify(body), // body data type must match "Content-Type" header
      }
    );

    const data = await res.json();

    return new ImageResponse(
      (
        <div
          style={{
            backgroundSize: "150px 150px",
            height: "100%",
            width: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            flexWrap: "nowrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <img
              alt={data?.store?.store_Name}
              //     src="data:image/svg+xml,%3Csvg width='116' height='100' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M57.5 0L115 100H0L57.5 0z' /%3E%3C/svg%3E"
              src={data?.store?.store_Banner_Image}
              style={{ margin: "0 30px" }}
            />
          </div>
          <div>{data?.store?.store_Name}</div>
          <div>{data?.store?.store_Banner}</div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
