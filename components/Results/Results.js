export default function Results({ data }) {
  return (
    <div>
      {data && (
        <>
          <h2>Data</h2>
          <p>Title: {data.titleOfWork}</p>
          <p>Composer/Arranger: {data.composerArranger}</p>
          <p>Book title: {data.titleOfBook}</p>
          <p>Print publisher: {data.printPublisher}</p>
          <p>Music publisher: {data.musicPublisher}</p>
          <p>Website: {data.website}</p>
          <p>ISBN: {data.ISBN}</p>
          <p>Number of copies: {data.numCopies}</p>
        </>
      )}
    </div>
  );
}
