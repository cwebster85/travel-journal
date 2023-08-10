import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={`cover for ${props.title}`} className="card--image"/>
            <div className="card--details">
                <ul>
                    <li className='location'><img src="/images/location-pointer.png" className='location--pointer'/><p>{props.location}</p><a href={props.googleMapsUrl} target="_blank" className='map--url'>View on Google Maps</a></li>
                    <li className='title'><h1>{props.title}</h1></li>
                    <li className='dates'><p>{props.startDate} - {props.endDate}</p></li>
                    <li className='desc'><p>{props.description}</p></li>
                </ul>
            </div>
        </div>
    )
}