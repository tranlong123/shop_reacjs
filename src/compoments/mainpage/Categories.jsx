import React from 'react'
import Fashion from '../../assets/images/category/Fashion.png'
import Electronic from '../../assets/images/category/Electronic.png'
import Cars from '../../assets/images/category/Cars.png'
import Gifts from '../../assets/images/category/Gifts.png'
import Music from '../../assets/images/category/noun-violin-3855547.png'
import Maket_up from '../../assets/images/category/noun-makeup-3380396.png'
import Pets from '../../assets/images/category/noun-pets-3664281.png'
import Baby_toys from '../../assets/images/category/noun-baby-toys-1183099.png'
import Groceries from '../../assets/images/category/noun-groceries-4171218.png'
import Books from '../../assets/images/category/noun-books-1747860.png'

const Categories = () => {
    const data = [
        {
            cateImg: Fashion,
            cateName: "Fashion"
        },
        {
            cateImg: Electronic,
            cateName: "Electronic",
        },
        {
            cateImg: Cars,
            cateName: "Cars",
        },
        {
            cateImg: Gifts,
            cateName: "Gifts",
        },
        {
            cateImg: Music,
            cateName: "Music",
        },
        {
            cateImg: Maket_up,
            cateName: "Health & Beauty",
        },
        {
            cateImg: Pets,
            cateName: "Pets",
        },
        {
            cateImg: Baby_toys,
            cateName: "Baby Toys",
        },
        {
            cateImg: Groceries,
            cateName: "Groceries",
        },
        {
            cateImg: Books,
            cateName: "Books",
        },
    ]
    return (
        <>
            <div className="category">
                {
                    data.map((value, index) => {
                        return (
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Categories