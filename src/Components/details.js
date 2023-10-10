import { Box, Typography } from "@mui/material";

function detailsComponent(props){
    return (
        <Box sx={props.isMobile ? {marginTop: '.5em', width: '98%'} : {marginTop: '.5em', marginLeft: '-4em', width: '45em'}}>
            <Typography variant='h6' fontWeight='bold'>
                Full Spec
            </Typography>
            <Box>
                <Typography variant='subtitle1' fontWeight='bold'>
                    Interior Hull
                </Typography>
                <Typography variant='body1'>
                    -Dometic standup fridge/freezer <br/>
                    -Induction stovetop dual burner <br/>
                    -Stainless deep bar sink <br/>
                    -Dometic portable toilet <br/>
                    -Toilet enclosed leather seat/ hidden storage with Lagoon table <br/>
                    -Dual swivel seats <br/>
                    -TV mount <br/>
                    -Area touch lighting <br/>
                    -Lucid 5” memory foam QUEEN mattress <br/>
                    -Ventilated fixed frame built with 80/20 aluminum/ply <br/>
                    -Hidden clothes hamper under mattress <br/>
                    -Hardwood countertops with matching vinyl flooring <br/>
                    -Laminate coated cabinets <br/>
                    -Push Button to open/lock drawers/doors <br/>
                    -Hidden storage compartments <br/>
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1' fontWeight='bold'>
                    Exterior
                </Typography>
                <Typography variant='body1'>
                    -2x 100watt solar panels <br/>
                    -Cell signal booster with swivel mount <br/>
                    -2x Maxxair fans, (front exhaust, rear intake/exhaust) <br/>
                    -Gravity water fill with locking port <br/>
                    -Shore power plug in port <br/>
                    -Spare under mount tire <br/>
                    -2x 10” porthole windows (passenger) <br/>
                    -Main sliding window with screen (driver) <br/>
                    -Bunk sliding window with screen (passenger) <br/>
                    -2x theft prevention Thunderbolt deadbolt installed (rear/sliding) <br/>
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1' fontWeight='bold'>
                    Electrical
                </Typography>
                <Typography variant='body1'>
                    -Renogy 200AH Gel battery <br/>
                    -Renogy 2000w Inverter <br/>
                    -Inlaid battery monitor <br/>
                    -solar (noted above) <br/>
                    -All in one fuse panel (DC/AC) <br/>
                    -Alternator charger <br/>
                    -easily accessible/manageable from INTERIOR HULL <br/>
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1' fontWeight='bold'>
                    Water System
                </Typography>
                <Typography variant='body1'>
                    -Black faucet with pull down sprayer <br/>
                    -High capacity under counter water filter <br/>
                    -High power Shurflo pump, and accumulator with silencer attachment and strainer <br/>
                    -32 gallon fresh water wheel well tank <br/>
                    -7 gallon gray water tank under sink with quick connect drain <br/>
                    -Rear spray off station/shower <br/>
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1' fontWeight='bold'>
                    Garage
                </Typography>
                <Typography>
                    -separate from interior hull with waterproofing <br/>
                    -Heavy Duty sliding bike/gear tray. Designed for 4 bicycles. <br/>
                    -Heavy Duty sliding tool drawer with storage <br/>
                    -wall mounted shelving with adjustable bungee <br/>
                    -wall mounted shower station with quick connect port/storage <br/>
                    -separate garage lighting
                </Typography>
            </Box>
        </Box>
    )
}

export default detailsComponent