import { dataTypes } from "../../data/typeArrays";
import { useRouter } from "next/router";
import styled from "styled-components";
import DataField from "../DataField/DataField";
import ForwardButton from "../ForwardButton/ForwardButton";
import ForBackNav from "../ForBackNav/ForBackNav";

export default function ResultsForm({ data, dataType, setData }) {
  const router = useRouter();
  const dataFields = dataTypes[dataType].dataFields;

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("id", data._id);
    const response = await fetch("/api/submitFinalData", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to submit the data. Please try again.");
    }

    const responseData = await response.json();
    console.log("Response Data:", responseData);

    setData();
    router.push("/selectType/submitSuccess");
  }

  return (
    <>
      <H1>Data extracted 🚀</H1>
      <Regular16>Check and edit the results before hitting ‘submit’:</Regular16>
      {data && (
        <Results onSubmit={handleSubmit}>
          {dataFields.map((field) => (
            <DataField field={field} data={data} key={field.key}/>
          ))}
          <ForBackNav text={"Submit data"} forButton={true}/>
        </Results>
      )}
    </>
  );
}

const H1 = styled.h1`
  font-size: 2.1rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;

const Results = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 24px;
`;

const Regular16 = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin: 0;
  line-height: 1.5;
`;
