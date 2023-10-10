import { Box, Typography } from "@mui/material";
import CopyToClipboardButton from "./copyToClipboard";

function contactCard(props){
    return (
        <Box sx={props.isMobile ? {width: '98%', marginTop: '1em'} : {marginLeft: '-4em', width: '45em'}}>
            <Typography variant='h6' fontWeight='bold'>
                Contact
            </Typography>
            <Box
                sx={{marginLeft: '.4em'}}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <Typography variant='subtitle1'>
                        tho430@gmail.com
                    </Typography>
                    <CopyToClipboardButton textToCopy={'tho430@gmail.com'}/>
                    {props.isMobile && <Box sx={{marginLeft: '1.5em'}}>
                        <CopyToClipboardButton/>
                    </Box>}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row'
                    }}
                >
                    <Typography variant='subtitle1'>
                        (405) 714-4758
                    </Typography>
                    <CopyToClipboardButton textToCopy={'4057144758'}/>
                </Box>
            </Box>
        </Box>
    )
}

export default contactCard;