import { useEffect, useState } from 'react'; //useState沒定義到，跳出錯誤訊息(useState is not defined)
import '../css/app0811.css'
import { BsFillUmbrellaFill } from "react-icons/bs";
import axios from "axios";

const App = () => {
    // 建立一個react變數，使用useState Hook
    // 存放各縣市資料
    // const [變數名稱, 更改變數名稱的方法] = useState(預設值);
    const [citys, setCitys] = useState([]);
    // useEffect Hook=>渲染後，只呼叫一次json
    // 取得渲染後的DOM元素，要寫在useEffect
    useEffect(() => {
        // 非同步取資料
        (async () => {
            // 取得public中的json檔
            // const data = await axios.get('./json/F-C0032-001.json');
            // 檢查是否連上json
            // console.log(data.data.cwaopendata.dataset);

            // 取得src中的json檔案
            const jsonData = await axios.get('./src/json/F-C0032-001.json');
            // 檢查是否連上json
            // console.log(jsonData.data.cwaopendata.dataset);

            // 取得各縣市的氣象資訊
            const { location } = jsonData.data.cwaopendata.dataset;
            console.log(location);

            // 將各縣市資料透過setCitys方法，更新citys
            setCitys(location);
        })();
    }, []);

    // 卡片內容
    const CardBody =({city, item, index})=>{
        return(
            <>
            {/* 日期 */}
                                            <div className="date">
                                                {/* 11日 */}
                                                {/* 使用日期時間函數 toLocaleString */}
                                                {/*  */}
                                                {
                                                    new Date(item.startTime).toLocaleString(undefined, {
                                                        day: "numeric"
                                                    })
                                                }
                                            </div>
                                            {/* 時間 */}
                                            <div className="time">
                                                {/* 開始 */}
                                                {/* 上午6:00 */}
                                                {
                                                    new Date(item.startTime).toLocaleString(undefined, {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })
                                                }
                                                <br />
                                                ~<br />
                                                {/* 結束 */}
                                                {/* 下午6:00 */}
                                                {
                                                    new Date(item.endTime).toLocaleString(undefined, {
                                                        hour: "numeric",
                                                        minute: "numeric",
                                                    })
                                                }
                                                <br />
                                            </div>
                                            {/* 天氣圖 */}
                                            <div className="weatherPic">
                                                {/* 天氣圖：使用執行路徑，所以要將圖片放在public資料夾中，才讀得到 */}
                                                {/* <img src="./weatherIcon/晴午後短暫雷陣雨.svg" alt="" /> */}
                                                <img style={{
                                                    width: "95px",
                                                    height: "95px",
                                                }} src={`./weatherIcon/${item.parameter.parameterName}.svg`} alt="" />
                                            </div>
                                            {/* 天氣名稱 */}
                                            <div className="weatherName">
                                                {/* 晴午後短暫雷陣雨 */}
                                                {item.parameter.parameterName}
                                            </div>
                                            {/* 降雨率PoP */}
                                            <div className='pop'>
                                                {/* icon */}
                                                <BsFillUmbrellaFill />
                                                {city.weatherElement[4].time[index].parameter.parameterName}%
                                                {/* `${city.weatherElement[4].time[index].parameter.parameterName}%` */}
                                            </div>
            </>
        )
    }

    // 卡片元件
    function Card({ city }) {
        return (
            <div>
                {/* 取得縣市陣列跑迴圈 */}
                <div className="cards">
                    {/* 取得縣市陣列跑迴圈 */}
                    <div className="card">
                        {/* 卡片標題 */}
                        <div className="card-hrader">
                            {/* 台北市 */}
                            {city.locationName}
                        </div>
                        {/* 卡片內容 */}
                        <div className="card-body">
                            {/* 取得陣列資料後跑迴圈 */}
                            {/* 顯示各縣市的3個欄位資訊 */}
                            {
                                city.weatherElement[0].time.map((item, index) => {
                                    return (
                                        <div className="item" key={index}>
                                            <CardBody item={item} city={city} index={index}/>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>



                </div>
            </div>
        )
    }

    return (
        <>
            {/* 36小時天氣預報的版型 */}
            {/* 主要欄位
            locationName(地點)、startTime(起始時間)、endTime(結束時間) */}
            {/* 台北市
        11日    上午6:00~下午6:00晴午後短暫雷陣雨 雨傘 80%
        11日    下午6:00~上午6:00多雲短暫陣雨 雨傘 40%
        12日    上午6:00~下午6:00多雲午後短暫雷陣雨 雨傘 40% */}
            <h2>36小時天氣預報</h2>

            <div className="cards">
                {
                    citys.map((city) => {
                        return (
                            // 呼叫元件(元件習慣開頭大寫，兩個字一樣是駝峰式命名)
                            <Card city={city} key={city.locationName} />
                        )
                    })
                }


            </div>





        </>
    )
}

export default App