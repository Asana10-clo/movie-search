function CardUI(props){
    return(
        <div className="bg-gray-700 rounded border-b">
            <div className="w-40 h-30 ">
                <img className="object-cover h-50 w-50 rounded-lg align-middle" src={props.img}  alt="movie-poster" />
            </div>
            <div className='text-red-300'>
                <p >{props.title}</p>
                <p>{props.year}</p>
                <p>{props.id}</p>
                <p>{props.type}</p>
            </div>

        </div>
    )

}

export default CardUI;
