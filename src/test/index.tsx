import React, {  useState } from 'react'
import Son from './son.js'
const Com:React.FC = ()=>{
    const [text,setText] = useState('这是个按钮')
    const fn = (val:string)=>{
        console.log('被点击了,按钮文字；',val)
    }
    return (
        <div onClick={fn} style={{display:'flex'}}>
            <input onChange={(e)=>setText(e.target.value)} placeholder="修改按钮文字"/>
            <Son text={text} affterClick={()=>fn(text)}></Son> 
        </div>
    )
}
export default Com