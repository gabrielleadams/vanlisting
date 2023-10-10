import { Box, Chip, Typography } from "@mui/material";

function highlightsComponent(props){
    return (
        <Box 
            sx={props.isMobile ? {marginTop: '.5em', width: '98%'} : {marginLeft: '-4em', width: '45em'}}
        >
            <Typography variant='h6' fontWeight='bold'>
                Highlights
            </Typography>
            <Chip label='Extended & Highroof' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Rear Wheel Drive' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Ecoboost Engine' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Gasoline' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Low Mileage' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Solar' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Alternator Charger' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Inverter' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Bike/Gear Storage' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Swivel Seats' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Induction Cooktop' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Dometic DC Fridge' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Running Water' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Storage Space' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Outdoor Shower' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
            <Chip label='Cassette Toilet' variant='filled' sx={{marginLeft: '.5em', marginTop: '.5em'}} color='primary'/>
        </Box>
    )
}

export default highlightsComponent