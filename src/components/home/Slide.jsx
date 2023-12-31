import React from 'react';
import Carousel from 'react-multi-carousel';
import { Box, Button, Divider, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { useSelector } from 'react-redux';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 5
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
    margin-top: 10px;
    background:#fff;
`
const Deal = styled(Box)`
    padding: 15px 20px;
    display:flex;
`
const Timer = styled(Box)`
    display:flex;
    margin-left:10px;
    align-items:center;
    justify-content:center;
    color:#7f7f7f;
`
const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-right: 25px;
`
const ViewAllButton = styled(Button)`
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight:600;
    color:#fff;
`;

const Image = styled('img')({
    width: 'auto',
    height: 150
})

const Text = styled(Typography)`
    font-size: 14px;
    margin-top: 5px
`

const Slide = ({ title, timer }) => {

    const items = useSelector((state) => state.allCart.item);

    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>
    }

    return (
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                    timer &&
                    <Timer>
                        <img src={timerURL} alt="timer" style={{ width: 24, marginRight: 10 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }
                <ViewAllButton variant='container' color="primary">View All</ViewAllButton>
            </Deal>
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                slidesToSlide={1}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"

            >
                {
                    items.map(item => (
                        <Link to={`products/${item.id}`} style={{ textDecoration: 'none' }} key="{slide}" >
                            <Box textAlign='center' style={{ padding: '25px 15px' }}>
                                <Image src={item.image} alt="banner" />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{item.title}</Text>
                                <Text style={{ color: 'green' }}>$ {item.price} only</Text>
                                <Text style={{}}>{item.category}</Text>
                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Component>
    )
}

export default Slide;