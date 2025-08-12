import React from 'react'

const Card = ({ imgURL, tittlt, desc, btnName, btnURL }) => {
    // console.log(props.imgURL)
    // 解構=>把元件得到的參數給props，再逐一解構出來使用
    // const { imgURL, tittlt,desc,btnName,btnURL } = props;
    // const { imgURL } = props;
    // const { tittlt } = props;
    // const { desc } = props;
    // const { btnName } = props;
    // const { btnURL } = props;


    return (
        <div>
            <div className="card">
                <img src={imgURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{tittlt}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={btnURL} className="btn">{btnName}</a>
                </div>
            </div>
        </div>
    )
}

export default Card
