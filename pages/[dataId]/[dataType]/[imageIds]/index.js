import ResultsForm from "../../../../components/ResultsForm/ResultsForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "../../../../components/Loading/Loading";

export default function results({}) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const dataId = router.query.dataId
  const imageIds = router.query.imageIds;
  const dataType = router.query.dataType;
  console.log("dataType: ", dataType);

  useEffect(() => {
    if (!imageIds) return;

    const idsArray = imageIds.split("-");

    async function getDataFromImage(ids) {
      setIsLoading(true);
      try {
        const response = await fetch("/api/getDataFromImage2", {
          method: "POST",
          body: JSON.stringify({ imageIds: ids, dataId: dataId }),
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("data: ", data.data, "doc: ", data.doc);
          setIsLoading(false);
          return data.doc;
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
    fetchData();
  }, [imageIds]);

  return (
    <>
      {isLoading && <Loading />}
      {data ? (
        <>
        <ResultsForm data={data} dataType={dataType} setData={setData} />

        </>
      ) : null}
    </>
  );
}
