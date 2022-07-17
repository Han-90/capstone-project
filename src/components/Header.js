import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
	const styledHeader = {background: '#35383F', opacity: '0.95'};
	const stlyedTypography = {left: '7em'};
	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static" style={styledHeader}>
				<Toolbar variant="dense" style={stlyedTypography}>
					<Typography variant="h6" color="inherit" component="div">
						Music Box
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
