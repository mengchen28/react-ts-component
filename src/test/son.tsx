import React, { useEffect } from 'react'

interface testProps{
    text:string,
    affterClick:(value:string)=>void
}

const son:React.FC = (props:testProps)=>{
    const {text:buttonText,affterClick} = props
    const waitFn = ()=> {
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(1)
            },2000)
        })
    }

    useEffect(async ()=>{
        await waitFn()
        console.log("son执行了")
    },[])

    return (
        <button onClick={affterClick}>{buttonText}</button>
    )
}
export default son