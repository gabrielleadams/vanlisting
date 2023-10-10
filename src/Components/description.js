import { Box, Typography } from "@mui/material";

function descriptionComponent(props){
    return (
        <Box sx={props.isMobile ? {marginTop: '.7em', width: '98%'} : {marginTop: '.7em', marginLeft: '-4em', width: '45em'}}>
            <Typography variant='h6' fontWeight='bold'>
                Description
            </Typography>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    Looking for the ultimate van life experience? Look no further! 
                    Introducing the adventure-ready van that has everything you need for your next road trip. 
                    With a stylish and modern design, this van is perfect for those who want to travel in style and comfort.
                </Typography>
            </Box>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    The interior hull is fully equipped with a Dometic standup fridge/freezer, induction stovetop dual burner, 
                    stainless deep bar sink, Dometic portable toilet, and a leather seat/hidden storage with Lagoon table. 
                    The dual swivel seats and TV mount provide ultimate relaxation, while the area touch lighting and 5” 
                    memory foam QUEEN mattress make sure you have a comfortable night's sleep. The hardwood countertops, 
                    laminate coated cabinets, and push button to 
                    open/lock drawers/doors provide ample storage space, while the hidden compartments keep your belongings secure.
                </Typography>
            </Box>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    The exterior of the van is just as impressive as the interior, with 2x 100watt solar panels, 
                    cell signal booster with swivel mount, 2x Maxxair fans, gravity water fill with locking port, and a spare under mount 
                    tire. The 2x 10” porthole windows (passenger), main sliding window with screen (driver), and bunk sliding window 
                    with screen (passenger) provide fresh air and natural light, while the 2x theft prevention Thunderbolt 
                    deadbolt installed (rear/sliding) ensure your safety.
                </Typography>
            </Box>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    The electrical system is powered by a Renogy 200AH Gel battery and a Renogy 2000w Inverter, 
                    and is easily accessible and manageable from the interior hull. The water system includes a black faucet with pull down sprayer, 
                    high capacity under counter water filter, high power Shurflo pump, 
                    and accumulator with silencer attachment and strainer, as well as a 32 gallon fresh water wheel well tank, 
                    7 gallon gray water tank under sink with quick connect drain, and rear spray off station/shower.
                </Typography>
            </Box>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    The garage is separate from the interior hull with waterproofing and includes a heavy-duty sliding bike/gear tray, 
                    designed for 4 bicycles, a heavy-duty sliding tool drawer with storage, wall-mounted shelving with adjustable bungee, 
                    wall-mounted shower station with quick connect port/storage, and separate garage lighting.
                </Typography>
            </Box>
            <Box sx={{marginTop: '.5em'}}>
                <Typography variant='body1'>
                    Built by a fine furniture maker, inspired by mid-century and Japanese design, this van is the perfect combination of style and functionality.
                    Don't miss out on this beautifully handcrafted, adventure-ready and tested van!
                </Typography>
            </Box>
        </Box>
    )
}

export default descriptionComponent