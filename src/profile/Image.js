
const Image = props => {
    return (
        <img src={props.url} alt={props.alternative} width={props.largeur} className="card-img-top"/>
    )
}

export default Image;