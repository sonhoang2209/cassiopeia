import React from "react";
import BannerItem from "./Item";
import "./banner.scss"
import { useSelector } from "react-redux";

function Banners(props) {
    const banners = useSelector((store) => store.bannerReducer.banner);

    return (
        <div className="banner">
            <div className="container">
                <div className="banner-inner">
                    {
                        banners.map((item, index) => {
                            return (
                                <div key={index} className={ index===0 ? "banner-item banner-item__primary" : "banner-item" }>
                                    {
                                        index === 0 ? <BannerItem data={item} btnBlack /> : <BannerItem data={item} />
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Banners;