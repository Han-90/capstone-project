import {useState} from 'react';

import {StyledFormLabel} from './Form.styled';

const Form = () => {
	const [event, setEvent] = useState(null);
	return (
		<div className="create">
			<h2> Add a new event</h2>
			<form
				onSubmit={event => {
					event.preventDefault();
					const formData = new FormData(event.target);
					const formValues = Object.fromEntries(formData);
					setEvent(formValues);
					console.log(formValues);

					console.log('wurde geklickt');
				}}
			>
				<StyledFormLabel htmlFor="eventName">Event name:</StyledFormLabel>
				<input type="text" id="eventName" name="eventName" required />

				<StyledFormLabel htmlFor="location">Location:</StyledFormLabel>
				<select id="location" name="location" required>
					<option value="Stuttgart">Stuttgart</option>
					<option value="München">München</option>
					<option value="Köln">Köln</option>
					<option value="Düsseldorf">Düsseldorf</option>
					<option value="Hamburg">Hamburg</option>
					<option value="Berlin">Berlin</option>
				</select>

				<StyledFormLabel htmlFor="date">Date</StyledFormLabel>
				<input type="date" id="date" name="date" required />
				<br />
				<button type="submit">Submit</button>
			</form>
			<pre>{JSON.stringify(event, null, 4)}</pre>
		</div>
	);
};

export default Form;
