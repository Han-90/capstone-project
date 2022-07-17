import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
// Ich habe die Material UI Library genutzt. https://mui.com/material-ui/getting-started/installation/ unter folgendem Installationspfad zu finden.
// Nach dem ich ich die Library mit dem Node Package Manager installiert habe, musste ich auch die Icons importieren um sie überhaupt nutzen zu können.
// mit Hilfe von import {Link} verlinke ich auf meine Seiten über die Navigationsleiste. Hierzu muss ich in der App.js React Router importieren.

export default function CreateBottomNavigation() {
	// ein Funktionsaufruf in dem ich meine Navigationsleiste erstelle und gleichzeitig auch exportiere, um sie als Komponente wieder verwenden zu können
	const navigationStyle = {background: '#35383F', height: '50px', opacity: '0.95'};
	// ich deklariere eine Konstante um meine Elemente zu stylen. In den Properties weise ich die Styles zu und überreiche sie im jeweiligen Tag.
	const iconStyle = {color: 'white'};
	return (
		// nachdem ich meine Funktion aufgerufen habe und somit einen Input erstellt habe, muss ich auch einen Output gewährleisten, den ich innerhalb des return scopes ausgebe.
		<Box sx={{width: 375}}>
			<BottomNavigation showLabels style={navigationStyle}>
				<Link to="/">
					<BottomNavigationAction label="Home" icon={<HomeIcon />} style={iconStyle} />
				</Link>
				<Link to="events">
					<BottomNavigationAction label="Events" icon={<EventIcon />} style={iconStyle} />
				</Link>
				<Link to="library">
					<BottomNavigationAction
						label="Library"
						icon={<LibraryBooksIcon />}
						style={iconStyle}
					/>
				</Link>
			</BottomNavigation>
		</Box>
	);
}
