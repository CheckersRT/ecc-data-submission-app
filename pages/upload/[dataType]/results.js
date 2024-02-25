import ResultsForm from "../../../components/ResultsForm/ResultsForm";

export default function results({ data }) {
  
  return (
    <>
      <ResultsForm data={sheetMusicData} dataType={dataType} />
    </>
  );
}
