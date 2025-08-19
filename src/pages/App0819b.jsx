// 次元件
function SecondComponent({c}) {
    return<>
    <h1>我是SecondComponent元件</h1>
    <p>SecondComponent接收的屬性是：{c}</p>
    </>
}

function MyComponent2({ b }) {
    return (
        <>
            <h2>接收來自於主元件的傳遞</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti dolorum mollitia quos natus nisi tempora quae repudiandae illum voluptates adipisci?</p>
            <SecondComponent c={b} />
            我是：{b}
        </>
    )
}



// 子元件接收主元件傳遞過來的元件
function MyComponent({a, children}) {
    return (
        <>
        <h2>接收來自於主元件的傳遞</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi pariatur sunt autem consectetur, eos iste deleniti, fugiat minus sint modi ad nostrum impedit nisi odit suscipit voluptas similique itaque sapiente?</p>
            {children}
            我是：{a}
        </>
    )
}

// 主元件
export const App0819b = () => {
    return (
        <div>
            <h1>元件之間，傳遞元件</h1><hr />
            {/* 此方法是比較進階的寫法，現階段理解即可 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a" />
            </MyComponent>

            <hr />
            {/* 現階段使用此方法(逐層各自呼叫元件) */}
            <MyComponent2 b="屬性b" />

        </div>
    )
}

export default App0819b