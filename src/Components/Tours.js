import Cards from './Cards'


export default function Tours({ tours, removeCard }) {
    return (
        <div className="wrapper">
            <h1 className='tour-title'>Plan With Love</h1>
            <div className='cards_container'>
                {
                    tours.map((ele) => {
                        return <Cards key={ele.id} {...ele} removeCard={removeCard}></Cards>

                        /*
                        Whenever use map, always pass key with unique id. [best practice]
                        If you don't have an id then you can pass index as id. [Not best practice]
                        */
                    })
                }
            </div>
        </div>

    )
}