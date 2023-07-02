import React from 'react'
import Tdata from './Tdata'

import Slider from "react-slick";

const TopCart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        margin: 20,
    };
    return (
        <>
            <Slider {...settings}>
                {
                    Tdata.map((value, index) => {
                        return (
                            <>
                            <div className="box product" key={index}>
                                <div className="nameTop d_flex">    
                                    <span className="tleft">{value.para}</span>
                                    <span className="tright">{value.desc}</span>
                                </div>
                                <div className="img">
                                    <img src={value.cover} alt="" height={150} />
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </Slider>
        </>
    )
}

export default TopCart