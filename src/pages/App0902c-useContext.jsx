import { createContext, useContext, useState } from 'react'

const App = () => {

    // 建立一個空的共用區(可以跨元件使用)
    const UserContext = createContext({});
    // 建立使用者變數
    const [username, setUsername] = useState("demo");
    // 建立按鈕控制變數
    const [isLogin, setIsLogin] = useState(false);


    // 建立登入元件
    const LoginForm = () => {
        // 因為要被放在共用區，所以要搬到App元件內
        // const [username, setUsername] = useState('');
        // 從共用區UserContext解構出username, setUsername
        const { username, setUsername, setIsLogin } = useContext(UserContext);

        return (
            <>
                <label htmlFor="username">使用者名稱</label>
                <input
                    type="text"
                    id="username"
                    placeholder="請輸入使用名稱"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
            </>
        )
    }

    // 登入後的歡迎元件
    const Greeting = () => {
        // 從共用區UserContext取得username
        const { username } = useContext(UserContext);
        return (
            <div>
                Hi, {username}
            </div>
        )
    }



    return (
        <>

            <h1>useContext</h1><hr style={{ marginBottom: "50px" }} />
            <UserContext.Provider value={{ username, setUsername, setIsLogin }}>

                {/* 
                <LoginForm/>
                <br/>
                <Greeting/>
                 */}

                {/* 將原本的架構改成三原運算子 */}
                {
                    isLogin ? <Greeting/> : <LoginForm/>
                }

            </UserContext.Provider>

        </>
    )
}

export default App