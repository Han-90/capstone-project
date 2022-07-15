const EventList = ({events}) => {
	return (
		<div>
			{events.map(event => (
				<div key={event.id}>
					<h2>{event.eventName}</h2>
					<p>{event.location}</p>
					<p>{event.date}</p>
				</div>
			))}
		</div>
	);
};
export default EventList;
