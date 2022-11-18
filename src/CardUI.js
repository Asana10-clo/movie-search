function CardUI(props){
    return(
        <div className="bg-gray-700 rounded border-b">
            <div className="w-16 h-40">
                <img src={props.img}  alt="movie-poster" />
            </div>
            <div>
                <p>{props.title}</p>
                <p>{props.year}</p>
                <p>{props.id}</p>
                <p>{props.type}</p>
            </div>

        </div>
    )

}

export default CardUI;
