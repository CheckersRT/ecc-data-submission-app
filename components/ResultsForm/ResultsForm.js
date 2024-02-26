import { dataTypes } from "./typeArrays";
import { useRouter } from "next/router";


export default function ResultsForm({ data, dataType, setData }) {
  const router = useRouter()
  const dataFields = dataTypes[dataType];

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    formData.append("id", data._id)
    const response = await fetch("/api/submitFinalData", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to submit the data. Please try again.')
    }

    const responseData = await response.json()
    console.log("Response Data:", responseData)

    setData()
    router.push("/upload/submitSuccess")

  }

  return (
    <>
    <h2>Data extracted 🚀</h2>
    <p>Check and edit the results before hitting ‘submit’:</p>
      {data && (
        <form onSubmit={handleSubmit}>
          <h2>Data</h2>

          {dataFields.map((field) => (
            <div key={field.key}>
              <label htmlFor={field.key}>{field.name}</label>
              <input
                type="text"
                id={field.key}
                defaultValue={data[field.key]}
                name={field.key}
              ></input>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      )}
    </>
  );
}
