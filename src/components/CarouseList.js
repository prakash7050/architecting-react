import React, { useMemo } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import CardList from './CardList/CardList';
import cardImage from "../images/Rectangle 9.png"
import { isMobile } from 'react-device-detect';

function CarouselList({items = []})
{
    const itemList = useMemo(() => {
        const itemList = [
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            },
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            },
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            },
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            },
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            },
            {
                label : "Lorem Ipsum",
                image : cardImage,
                text : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sollicitudin ullamcorper leo in eleifend. In at hendrerit tellus. Nunc vel ullamcorper eros.",
                buttonLabel : "See this project"
            }
        ]

        if(items.length === 0){
            return itemList
        }
        return items
    },[items])

    return (
        <Carousel animation='slide' height={550} sx={{width:"100%"}}>
        {itemList?.map((item,i) => {
                return (
                    <div style={{display:'flex',flexDirection:'row',overflow:'hidden'}}>
                        <CardList item={itemList[i]} key={i+1}/>
                        {!isMobile && <>
                            <CardList item={itemList[i]} key={i+2}/>
                            <CardList item={itemList[i]} key={i+3}/>
                            <CardList item={itemList[i]} key={i+4}/>
                        
                        </>}
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselList;