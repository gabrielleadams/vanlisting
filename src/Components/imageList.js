import { ImageList, ImageListItem } from '@mui/material';
import mainImageExterior from '../Assets/IMG_1653.JPG';
import sinkImage from '../Assets/IMG_1658.JPG';
import bedMountainView from '../Assets/DSC09232.JPG';
import mountainVan from '../Assets/DSC09271.JPG';
import cabinets from '../Assets/IMG_1659.JPG';

function ImageListComponent(props) {
    return (
        <ImageList
            sx={props.isMobile ? { width: '100%', marginTop: '0em', marginBottom: '0em' } : { width: '55em', marginTop: '0', borderRadius: 2 }}
            variant='quilted'
            cols={10}
            rowHeight={props.isMobile ? 140 : 220}
        >
            <ImageListItem key={'exteriorImg'} cols={props.isMobile ? 10 : 6} rows={2}>
                <img
                    src={mainImageExterior}
                    alt='Exterior of van with sliding door open'
                    loading='lazy'
                />
            </ImageListItem>
            <ImageListItem key={'sinkImage'} cols={props.isMobile ? 3 : 2} rows={props.isMobile ? 1 : .8}>
                <img
                    src={sinkImage}
                    alt='Sink with countertop insert to side'
                    loading='lazy'
                />
            </ImageListItem>
            {!props.isMobile && <ImageListItem key={'cabinets'} cols={2} rows={.8}>
                <img
                    src={cabinets}
                    alt='Cabinets in interior with light on'

                    loading='lazy'
                />
            </ImageListItem>}
            <ImageListItem key={'bedMountainView'} cols={props.isMobile ? 7 : 4} rows={props.isMobile ? 1 : 1.2}>
                <img
                    src={bedMountainView}
                    alt='View of mountains looking over the bed'
                    loading='lazy'
                />
            </ImageListItem>
        </ImageList>
    )
}

export default ImageListComponent