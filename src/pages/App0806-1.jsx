import '../css/app0806-1.css'

const App = () => {
    // 資料抽離
    const photos={
        photo1:{
            imgURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
            tittlt:'可愛狗勾',
            desc:"注意，這是一隻超可愛的狗勾^^感謝你的注意",
            btnName:'圖片來源',
            btnURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
        },
        photo2:{
            imgURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittlt:'花',
            desc:"This is 漂亮的粉色小花花",
            btnName:'點我看大圖',
            btnURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        photo3:{
            imgURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            tittlt:'彩色小花',
            desc:"Hi",
            btnName:'GoGoGo看花趣',
            btnURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    }

    return (
        <>
        <div className="container">
            <div className="card">
                <img src={photos.photo1.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.tittlt}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnName}</a>
                    </div>
            </div>

            <div className="card">
                <img src={photos.photo2.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.tittlt}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnName}</a>
                    </div>
            </div>

            <div className="card">
                <img src={photos.photo3.imgURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.tittlt}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnName}</a>
                    </div>
            </div>
        </div>
            

            </>
    )
}

export default App;