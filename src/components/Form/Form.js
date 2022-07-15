/* eslint-disable no-lone-blocks */
import {nanoid} from 'nanoid';
import {useState} from 'react';
import {Link} from 'react-router-dom';

import EventList from './EventList';
import {
	StyledFormLabel,
	StyledHeader,
	StyledInputLabel,
	StyledSelectLabel,
	StyledSubmitButton,
} from './Form.styled';

const Form = () => {
	const [event, setEvent] = useState();
	const [events, setEvents] = useState([]);

	return (
		<div className="create">
			<StyledHeader>Add a new event</StyledHeader>
			<form
				onSubmit={event_ => {
					event_.preventDefault();
					// unterbindet das Default verhalten des Formulars
					// dadurch wird das Laden der Seite verhindert
					const formData = new FormData(event_.target);
					// Liest die Daten innerhalb der Form aus (ausschließlich die Daten, die mit dem "name" Attribut versehen wurden)
					const formValues = Object.fromEntries(formData);
					// Gibt die ausgelesenen Daten als Objekt aus
					setEvents([{dateCreated: Date.now(), id: nanoid(), ...formValues}, ...events]);
					// Speichert die Werte im State
					event_.target.reset();
					// Resetted die eingegebenen Werte in der Form
				}}
			>
				<StyledFormLabel htmlFor="eventName">Event name:</StyledFormLabel>
				<StyledInputLabel type="text" id="eventName" name="eventName" required />

				<StyledFormLabel htmlFor="location">Location:</StyledFormLabel>
				<StyledSelectLabel id="location" name="location" required>
					<option value="Stuttgart">Stuttgart</option>
					<option value="München">München</option>
					<option value="Köln">Köln</option>
					<option value="Düsseldorf">Düsseldorf</option>
					<option value="Hamburg">Hamburg</option>
					<option value="Berlin">Berlin</option>
				</StyledSelectLabel>

				<StyledFormLabel htmlFor="date">Date</StyledFormLabel>
				<StyledInputLabel type="date" id="date" name="date" required />
				<br />
				<StyledSubmitButton type="submit">Submit</StyledSubmitButton>
			</form>
			<EventList events={events} />
		</div>
	);
};

export default Form;
