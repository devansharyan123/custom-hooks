import { useState , useEffect } from "react";

export function useFetch(url){

    const [data , setData] =  useState([])
    const [loading , setLoading] = useState(false)

  async function receieve(){
    setLoading(true);
    //console.log("coming");
    const response = await fetch(url);
    const actualData = await response.json();
    //console.log("coming");
    setLoading(false);
    setData(actualData.data)
    //console.log(actualData.data)
  }

    useEffect(() => {
        receieve()
    } , [url])

    return {data , loading } ;
}

