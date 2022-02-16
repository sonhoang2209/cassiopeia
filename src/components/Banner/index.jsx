import React,{useState,useEffect} from 'react';
import BannerItem from './Item';
import './banner.scss'

const data = [
    {
        "title":"40% OFF",
        "thumbnail":"https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_1200,q_auto/cass15_mrg4hb.jpg",
        "content":"Best deals this week. Fresh flowers, plants and gifts",
        "link":"/flowers",
        "text":'Shop now',
        "id":1
    },
    {
        "title":"Nice little gifts",
        "thumbnail":"https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass23_gfwimt.png",
        "content":"for loved ones",
        "link":"/gifts",
        "text":'View now',
        "id":2
    },
    {
        "title":"Plants",
        "thumbnail":"https://res.cloudinary.com/didlxgowc/image/upload/f_auto,c_limit,w_640,q_auto/cass31_esdbjz.png",
        "content":"for home comfort",
        "link":"/plants",
        "text":'View now',
        "id":3
    }
]

function Banners(props) {
    const [banner, setBanner] = useState([])

    const getProducts = async () => {
        setBanner(data);
    }

    useEffect(() => {
        getProducts()
    },[])

    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner-inner'>
                    {
                        banner.map((item, index) => {
                            return (
                                <div key={index} className={ index===0 ? 'banner-item banner-item__primary' : 'banner-item' }>
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