import EventIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

export default function Create() {
	const navigationStyle = {background: '#35383F', height: '50px', opacity: '0.95'};
	const iconStyle = {color: 'white'};
	return (
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
