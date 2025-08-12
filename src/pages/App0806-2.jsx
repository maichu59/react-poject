import Card from '../components/Card'
import '../css/app0806-1.css'

// 建立元件
const Dogdog = ({ }) => {
    return (
        <div className="cardd">

        </div>
    )
}

// 建立陣列物件資料
const arrPhotos = [
    {
        imgURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
        tittlt:'可愛狗勾',
        desc:"注意，這是一隻超可愛的狗勾^^",
        btnName:'圖片來源',
        btnURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
    },
    {
        imgURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tittlt:'花',
        desc:"This is 漂亮的粉色小花花",
        btnName:'點我看大圖',
        btnURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
        imgURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        tittlt:'彩色小花',
        desc:"Hi",
        btnName:'GoGoGo看花趣',
        btnURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },

]




// const App = () => {
// 資料抽離
// 物件資料
// const photos={
//     photo1:{
//         imgURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
//         tittlt:'可愛狗勾',
//         desc:"注意，這是一隻超可愛的狗勾^^",
//         btnName:'圖片來源',
//         btnURL:'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?_gl=1*1hvyrbz*_ga*MTk1ODE0NTg3Ni4xNzU0NDQzNDYw*_ga_8JE65Q40S6*czE3NTQ0NDM0NTkkbzEkZzEkdDE3NTQ0NDM0ODkkajMwJGwwJGgw',
//     },
//     photo2:{
//         imgURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         tittlt:'花',
//         desc:"This is 漂亮的粉色小花花",
//         btnName:'點我看大圖',
//         btnURL:'https://images.unsplash.com/photo-1600647993560-11a92e039466?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
//     photo3:{
//         imgURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         tittlt:'彩色小花',
//         desc:"Hi",
//         btnName:'GoGoGo看花趣',
//         btnURL:'https://images.unsplash.com/photo-1505129013025-ecf8f0168373?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     },
// }
//     return (
//         <>

//             <div className="container">
//                 <Card imgURL={photos.photo1.imgURL}
//                 tittlt={photos.photo1.tittlt}
//                 desc={photos.photo1.desc}
//                 btnName={photos.photo1.btnName}
//                 btnURL={photos.photo1.btnURL}
//                 ></Card>

//                 <Card imgURL={photos.photo2.imgURL}
//                 tittlt={photos.photo2.tittlt}
//                 desc={photos.photo2.desc}
//                 btnName={photos.photo2.btnName}
//                 btnURL={photos.photo2.btnURL}
//                 ></Card>

//                 <Card imgURL={photos.photo3.imgURL}
//                 tittlt={photos.photo3.tittlt}
//                 desc={photos.photo3.desc}
//                 btnName={photos.photo3.btnName}
//                 btnURL={photos.photo3.btnURL}
//                 ></Card>
//             </div>


//         </>
//     )
// }

export default App;