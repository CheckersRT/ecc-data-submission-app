export default function ResultsForm({ data }) {
  return (
    <div>
      {data && (
        <form>
          <h2>Data</h2>
          <input type="text" defaultValue={data.titleOfWork}></input>
          {/* <p>Title: {data.titleOfWork}</p> */}
          <input type="text" defaultValue={data.composerArranger}></input>
          {/* <p>Composer/Arranger: {data.composerArranger}</p> */}
          <input type="text" defaultValue={data.titleOfBook}></input>
          {/* <p>Book title: {data.titleOfBook}</p> */}
          <input type="text" defaultValue={data.printPublisher}></input>
          {/* <p>Print publisher: {data.printPublisher}</p> */}
          <input type="text" defaultValue={data.musicPublisher}></input>
          {/* <p>Music publisher: {data.musicPublisher}</p> */}
          <input type="text" defaultValue={data.website}></input>
          {/* <p>Website: {data.website}</p> */}
          <input type="text" defaultValue={data.ISBN}></input>
          {/* <p>ISBN: {data.ISBN}</p> */}
          <input type="text" defaultValue={data.numCopies}></input>
          {/* <p>Number of copies: {data.numCopies}</p> */}
          <input type="text" defaultValue={data.numCopies}></input>
        </form>
      )}
    </div>
  );
}
