import React, { useRef } from 'react'

const App = () => {
    // 建立useRef變數
    const inputRef1=useRef(null);
    const inputRef2=useRef(null);
    const inputRef3=useRef(null);


    function inputFocus1(){
        inputRef1.current.style.backgroundColor="yellow";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function inputFocus2(){
        inputRef2.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";
    }

    function inputFocus3(){
        inputRef3.current.style.backgroundColor="yellow";
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
    }

    function inputFovus(no){
        inputRef1.current.style.backgroundColor="";
        inputRef2.current.style.backgroundColor="";
        inputRef3.current.style.backgroundColor="";

        if(no===1){
            inputRef1.current.style.backgroundColor="yellow";
        }else if(no===2){
            inputRef2.current.style.backgroundColor="yellow";
        }else if(no===3){
            inputRef3.current.style.backgroundColor="yellow";
        }
    }

    return (
        <div>
            <h1>useRef-變色</h1>

            文字方塊1<input type="text" ref={inputRef1} onFocus={inputFocus1}/>
            <br />

            文字方塊2<input type="text" ref={inputRef2} onFocus={inputFocus2}/>
            <br />
            文字方塊3<input type="text" ref={inputRef3} onFocus={inputFocus3}/>
            <br />
        </div>
    )
}

export default App