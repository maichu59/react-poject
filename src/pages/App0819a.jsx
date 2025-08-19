// 建立子元件
function MyComponent(props) {

    // console.log(props)
    return <>
        <div>Hello!標準寫法</div>
        {/* 標準寫法 */}
        <div>{props.a}</div>
        <div>{props.b}</div>
        

    </>
}

    // 物件解構=>{物件成員}
    function MyComponent2({a,b}) {
        return<>
        <div>Hello!簡化寫法</div>
        {/* 簡化寫法 */}
        <div>{a}</div>
        <div>{b}</div>
        
        </>
    }

// 父元件
export const App0819a = () => {
    return (
        // 呼叫元件
<>

<MyComponent a="我是屬性a" b="我是屬性b"/>
<MyComponent2 a="我是屬性a" b="我是屬性b"/>
</>
    )
}

export default App0819a