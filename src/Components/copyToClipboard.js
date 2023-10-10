import { useState } from 'react'
import { IconButton, Snackbar, Chip } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IosShareIcon from '@mui/icons-material/IosShare';

function CopyToClipboardButton(props){
    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(true)
      navigator.clipboard.writeText(props.textToCopy ? props.textToCopy : window.location.toString())
    }
    
    return (
        <>
            {
                props.textToCopy ? 
                <IconButton
                    onClick={handleClick}
                    title='Copy'
                    sx={{marginTop: '-0.2em'}}
                    color='primary'
                >
                    <ContentCopyIcon/>
                </IconButton> 
                
                : 

                <Chip 
                    icon={<IosShareIcon />} 
                    label='Share' 
                    variant='outlined'
                    onClick={handleClick}
                    sx={{marginLeft: '.5em'}}
                    color='primary'
                />
            }
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            />
        </>
    )
}

export default CopyToClipboardButton