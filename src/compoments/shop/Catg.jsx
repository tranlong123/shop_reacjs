import React from 'react'

import Apple from '../../assets/images/category/Apple.png'
import Samsung from '../../assets/images/category/Samsung.png'
import Oppo from '../../assets/images/category/Oppo.png'
import Vivo from '../../assets/images/category/Vivo.png'
import Redmi from '../../assets/images/category/Redmi.png'
import Sony from '../../assets/images/category/Sony.png'

const Catg = () => {
    const data = [
        {
          cateImg: Apple,
          cateName: "Apple",
        },
        {
          cateImg: Samsung,
          cateName: "Samsung",
        },
        {
          cateImg:Oppo,
          cateName: "Oppo",
        },
        {
          cateImg: Vivo,
          cateName: "Vivo",
        },
        {
          cateImg: Redmi,
          cateName: "Redmi",
        },
        {
          cateImg: Sony,
          cateName: "Sony",
        },
      ]
  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>Brands</h1>
                <h1>Shops</h1>
            </div>
            {
                data.map((val,index)=>{
                    return(
                        <div className="box f_flex" key={index}>
                            <img src={val.cateImg} alt="" />
                            <span>{val.cateName}</span>
                        </div>
                    )
                })
            }
            <div className="box box2">
                <button>View All Brands</button>
            </div>
        </div>
    </>
  )
}

export default Catg