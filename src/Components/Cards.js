import { useState } from "react"

export default function Cards({ id, name, info, image, price, removeCard }) {

    const [readmore, setSetMore] = useState(false)
    const description = `${info.substring(0, 200)}...`

    return (
        <div className="card">
            <div className="image-container">
                <img src={image} className="image" />
            </div>
            <div className="card-info">
                <div className="card-main-detail">
                    <p className="card-price">{`$ ${price}`}</p>
                    <h2 className="card-name">{name}</h2>
                </div>

                <div className="card-description">
                    <p>{readmore ? info : description}
                        <span className="scroll-toggle" onClick={() => setSetMore(!readmore)}>{readmore ? ' Show Less' : ' Read More'}</span>
                    </p>
                    
                </div>
            </div>
            <button onClick={() => {
                removeCard(id);
            }} className="card-btn">Not Interested</button>
        </div>

    )
}