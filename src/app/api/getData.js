export async function getStoreData() {
  const body = {
    inputData: {
      storeslug: "rose-fast-food",
      product_Id: "6183775",
    },
  };

  const res = await fetch("https://webservice.dineapi.com/api/dine/storedata", {
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
  });

  const data = await res.json();

  return data
}
