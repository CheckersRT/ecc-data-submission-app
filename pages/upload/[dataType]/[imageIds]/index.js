import ResultsForm from "../../../../components/ResultsForm/ResultsForm";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react"


export default function results({}) {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()
  
  const imageIds = router.query.imageIds
  const dataType = router.query.dataType
  const idsArray = imageIds.split("-")
  console.log("dataType: ", dataType)
  
  useEffect(() => {
    
    async function getDataFromImage(ids) {
      setIsLoading(true);
      try {
     const response = await fetch("/api/getDataFromImage2", {
      method: "POST",
      body: JSON.stringify({ids: ids}),
      headers: {
          "Content-Type": "application/json",
      },
     });
    
     if (response.ok) {
       const data = await response.json();
       console.log("data: ", data.data, "doc: ", data.doc);
       setIsLoading(false);
       return data.doc
     }
    
     } catch (error) {
      console.error("Error: ", error);
      setIsLoading(false);
     }
    }

    async function fetchData() {
      try {
        const result = await getDataFromImage(idsArray);
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData()

  }, [])

  // if(!data) {
  //   return <p>Loading...</p>
  // }
  
  return (
    <>{isLoading && <p>...loading</p>}
      {data ? <ResultsForm  data={data} dataType={dataType} setData={setData}/> : null}
    </>
  );
}


