import { useMemo } from "react"
import { Box, Button } from "@mui/material"
import './cardList.css'


const CardList = ({item = {}}) => {

    return (
        <Box sx={{width:"15%",height:400,display:'block',margin:15}}>
            <div style={{width:300}}>
            <img className="card-img" src={item?.image} />
            </div>
            <div className="card-label">
                <p className="label-text">{item?.label}</p>
                <p className="text">{item?.text}</p>
                <Button variant="contained" style={{backgroundColor:'rgb(110, 103, 103)', borderRadius:6}} className="card-button">{item?.buttonLabel}</Button>
            </div>
        </Box>
    )
}

export default CardList;