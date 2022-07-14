import {useState} from 'react';
import {Link} from 'react-router-dom';

import {
	StyledFormLabel,
	StyledHeader,
	StyledInputLabel,
	StyledSelectLabel,
	StyledSubmitButton,
} from './Form.styled';

const Form = () => {
	const [event, setEvent] = useState(null);
	return (
		<div className="create">
			<StyledHeader>Add a new event</StyledHeader>
			<form
				onSubmit={event_ => {
					// unterbindet das Default verhalten des Formulars
					// dadurch wird das Laden der Seite verhindert
					event_.preventDefault();
					// Liest die Daten innerhalb der Form aus (ausschließlich die Daten, die mit dem "name" Attribut versehen wurden)
					const formData = new FormData(event_.target);
					// Gibt die ausgelesenen Daten als Objekt aus
					const formValues = Object.fromEntries(formData);
					// Speichert die Werte im State
					setEvent(formValues);
					// Resetted die eingegebenen Werte in der Form
					event_.target.reset();
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
			<pre>{JSON.stringify(event, null, 4)}</pre>
		</div>
	);
};

export default Form;
