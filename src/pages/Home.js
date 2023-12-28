import './Home.css'
import image1 from '../images/abstract-bg 1.png'
import image2 from '../images/Mask group.png'
import groupImage from '../images/Group 82.png'
import { Box, Button, Grid, Tab, Tabs, TextField } from '@mui/material'
import { isMobile } from 'react-device-detect'
import { useMemo, useState } from 'react'
import groupImage1 from '../images/Group 31.png'
import CarouselList from '../components/CarouseList'
import CircleList from '../components/CircleList/CircleListr'
import { Gamepad, Games, Menu, SportsEsports, Telegram, Twitter } from '@mui/icons-material'

const Home = () => {
    const [tabValue, setTabValue] = useState('Services')

    const listData = useMemo(()=>{
        const listData = [
            {name:"NFT & Raffle Marketplace"},
            {name:"NFT Drops"},
            {name:"Conventional Staking Platforms"},
            {name:"Lending & Borrowing Platforms"},
            {name:"Perpetual Dex"},
            {name:"Crypto Dex"},
            {name:"Multichain Solutions"},
            {name:"Smart Contract Audits"},
            {name:"Prompt Engineering Services"}
        ]
        return listData
    },[])

    const handleChange = (e,newValue) => {
        console.log(newValue)
        setTabValue(newValue)
    }
    console.log(window.innerWidth,"<<<<<<,")
    return(
        <div className="Home" >
            <Grid container spacing={2} marginTop={5}>
                <Grid className='grid' xs={6} md={4}>
                    <img className='group-image' src={groupImage} />
                </Grid>
                {
                    (!isMobile && window.innerWidth > 900) &&
                    <Grid className='grid' xs={6} md={4}>
                        <Tabs
                            value={tabValue}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="secondary"
                            variant='fullWidth'
                        >
                            <Tab style={{color:'white'}} value="Services" label="Services" />
                            <Tab style={{color:'white'}} value="Projects" label="Projects" />
                            <Tab style={{color:'white'}} value="Team" label="Team" />
                        </Tabs>
                    </Grid>
                }
                {
                    !isMobile && window.innerWidth > 900 && 
                    <Grid className='grid' xs={6} md={4}>
                        <Button style={{borderRadius:20, height:20, backgroundColor:'#403f3c'}} variant='contained'>Connect</Button>
                    </Grid>
                }
                {
                    (isMobile || window.innerWidth < 900) && 
                    <Grid className='grid' xs={6} md={4}>
                        <Menu style={{color:'white'}} />
                    </Grid>
                }
            </Grid>
            <div className='Image1-div'>
                <img className='Image2-item' src={image2} />
                <img className='Image1-item' src={image1} />
                <p className='text1'>Architecting Decentralized Dreams</p>
                <p className='text2'>Crafting Web3 Experiences Beyond Imagination</p>
                <Button title='Schedule' autoCapitalize={true} variant='contained' style={{borderRadius:5, height:25}}>Schedule</Button>
            </div>
            <p className='text3'>Services</p>
            <p className='text4'>Discover out comprehensive suite of services, meticulously crafted to elevate your business through innovate solutions</p>
            <Box sx={{margin:5}}>
                <Grid container spacing={2}>
                    {
                        listData.map(item =>{
                            return(
                                <Grid xs={6} md={4} className='grid-div'>
                                    <Box sx={{marginTop:2,marginLeft:2}}>
                                        <img className='group-image1' src={groupImage1} />
                                        <p className='text5'>{item.name}</p>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
            <div className='box-div'>
                <p className='box-div-text'>Join us in Shaping the Future</p>
                <Button variant='contained' style={{borderRadius:5, height:25,marginTop:-40}}>Get Customized Quote</Button>
            </div>
            <p className='text3' style={{marginTop:50}}>Projects</p>
            <p className='text4'>A showcase for our projects, demonstrating our commitment to innovate and client success</p>
            <CarouselList />
            <p className='text3' style={{marginTop:50}}>Team</p>
            <p className='text4'>Meet our dynamic team</p>
            <Grid container spacing={5} margin={15} marginRight={10}>
            {[1,2,3,4].map(id => {
                return (
                    <Grid xs={6} md={3}>
                        <CircleList />
                    </Grid>
                )
            })}
            </Grid>
            <p className='text3' style={{marginTop:50}}>Contact Us</p>
            <p className='text4'>Get in touch with us for tailored solutions</p>
            <Grid container spacing={2} justifyContent={'center'} >
                <Grid xs={6} md={5} marginRight={1} marginTop={10}>
                    <div>
                    <TextField variant='filled' fullWidth style={{backgroundColor:'white',display:'block'}} focused label='Name' />
                    </div>
                </Grid>
                <Grid xs={6} md={5} marginTop={10}>
                    <div>
                    <TextField variant='filled' fullWidth style={{backgroundColor:'white'}} focused label='Your Email Address' />
                    </div>
                </Grid>
            </Grid>
            <div>
            <TextField variant='filled' style={{width:"90%",backgroundColor:'white',marginTop:50}} focused label='Subject' />
            </div>
            <div>
            <TextField multiline variant='filled' minRows={7.3} style={{width:"90%",backgroundColor:'white',marginTop:50,height:200}} inputMode='text' focused label='How can we help?' />
            </div>
            <Button title='Schedule' autoCapitalize={true} variant='contained' style={{borderRadius:5, height:30,marginTop:50}}>Submit</Button>
            <div className='footer-div'>
                <img className='footer-image' src={groupImage} />
                <p className='footer-text'>All Rights Reserved</p>
                <div style={{textAlign:'center'}}>
                    <Twitter style={{color:'white'}} />
                    <SportsEsports style={{color:'white'}} />
                    <Telegram style={{color:'white'}} />
                </div>
            </div>
        </div>
        
    )
}

export default Home;