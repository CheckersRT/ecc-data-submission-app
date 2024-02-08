
export default function Results({data}) {
    return (
        <div>
            <h2>Data</h2>
            <p>{data.titleOfWork}</p>
            <p>{data.composerArranger}</p>
            <p>{data.titleOfBook}</p>
            <p>{data.printPublisher}</p>
            <p>{data.musicPublisher}</p>
            <p>{data.website}</p>
            <p>{data.ISBN}</p>
            <p>{data.numCopies}</p>
        </div>
    )
}