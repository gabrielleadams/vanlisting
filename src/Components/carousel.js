import React from 'react';
import Carousel from 'react-material-ui-carousel'
import vanExteriorDay from '../Assets/DSC09604.JPG'
import vanExteriorDusk from '../Assets/DSC09657.JPG'
import layout from '../Assets/016D74AF-8ABA-4B54-B38E-2D4AF7C1FB57.JPG'
import interior1 from '../Assets/DSC09601.JPG'
import interior2 from '../Assets/DSC09632.JPG'
import interior3 from '../Assets/DSC09638.JPG'
import interior4 from '../Assets/IMG_1646.JPG'
import fridge from '../Assets/IMG_1648.JPG'
import batteryMonitor from '../Assets/IMG_1652.JPG'
import toilet from '../Assets/IMG_1655.JPG'
import sink from '../Assets/IMG_1657.JPG'
import cabinets from '../Assets/IMG_1659.JPG'
import stove from '../Assets/IMG_1660.JPG'
import closet1 from '../Assets/DSC09641.JPG'
import bed from '../Assets/DSC09653.JPG'
import garageNight from '../Assets/DSC09660.JPG'
import waterTank from '../Assets/DSC09669.JPG'
import waterPump from '../Assets/IMG_1647.JPG'
import garageLeft from '../Assets/DSC09671.JPG'

function CarouselComponent(props){
    var items = [
        {
            name: "Van exterior during the day",
            image: vanExteriorDay,
            isPortrait: false
        },
        {
            name: "Van exterior during dusk",
            image: vanExteriorDusk,
            isPortrait: false
        },
        {
            name: "Layout of van",
            image: layout,
            isPortrait: true
        },
        {
            name: "Interior 1",
            image: interior1,
            isPortrait: false
        },
        {
          name: "Stove",
          image: stove,
          isPortrait: false
        },
        {
            name: "Interior 3",
            image: interior3,
            isPortrait: false
        },
        {
            name: "Interior 4",
            image: interior4,
            isPortrait: false
        },
        {
            name: "Fridge",
            image: fridge,
            isPortrait: true
        },
        {
            name: "Battery Monitor",
            image: batteryMonitor,
            isPortrait: true
        },
        {
            name: "Toilet",
            image: toilet,
            isPortrait: true
        },
        {
            name: "Sink",
            image: sink,
            isPortrait: true
        },
        {
            name: "Cabinets",
            image: cabinets,
            isPortrait: true
        },
        {
            name: "Closet 1",
            image: closet1,
            isPortrait: false
        },
        {
          name: "Interior 2",
          image: interior2,
          isPortrait: false
        },
        {
            name: "Bed",
            image: bed,
            isPortrait: false
        },
        {
            name: "Garage Night",
            image: garageNight,
            isPortrait: true
        },
        {
            name: "Water tank",
            image: waterTank,
            isPortrait: true
        },
        {
            name: "Water pump",
            image: waterPump,
            isPortrait: false
        },
        {
            name: "Left Garage",
            image: garageLeft,
            isPortrait: true
        },
    ]

    return (
          <Carousel
            sx={props.isMobile ? 
              {
                width: '100%'
              } :
              {
                width: '55em'
              }}
          >
              {
                  items.map( (item, i) => <Item key={i} item={item} isMobile={props.isMobile}/> )
              }
          </Carousel>
    )
}

function Item(props){
    if (props.isMobile){
      return (
        <img src={props.item.image} alt={props.item.name} style={{width: '100%'}}/>
      )
    } else if (!props.isMobile){
      return (
        <img src={props.item.image} alt={props.item.name} style={props.item.isPortrait ? {height: '37.5em', marginLeft: '15.5em', borderRadius: 10} : {width: '100%', borderRadius: 10}}/>
      )
    }
}

export default CarouselComponent