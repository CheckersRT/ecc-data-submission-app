import { dataTypes } from "./typeArrays";


export default function ResultsForm({ data, dataType }) {
  const dataFields = dataTypes[dataType];

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    console.log("formData: ", formData)

    const response = await fetch("/api/submitFinalData", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to submit the data. Please try again.')
    }

    const data = await response.json()

  }

  return (
    <>
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
