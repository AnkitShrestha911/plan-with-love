export default function RefreshPage({ resetTours }) {
    return (
        <div className="refresh-container">
            <h1 className="refresh-heading">No Tours Are Left !</h1>
            <button onClick={resetTours} className="refresh-btn">Refresh Now</button>
        </div>

    )


}