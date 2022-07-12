import {StyledFormLabel} from './Form.styled';

const Form = () => {
	return (
		<div className="create">
			<h2> Add a new event</h2>
			<form>
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
		</div>
	);
};

export default Form;
