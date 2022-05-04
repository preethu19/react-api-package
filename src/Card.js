export const Card = ({title="", price="", image="", link=""}) => {
    return(
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <a href={link} target="_blank" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}