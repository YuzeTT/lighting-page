import { createSignal } from 'solid-js'

export default function Hero(props) {
  // const [count, setCount] = createSignal(0)
  return (
    <div>
      <span>{props.text1}</span>
      <span>{props.text2}</span>
      <span>{props.name}</span>
      {/* <div className='text-4xl font-bold'>{props.name}</div> */}
      {/* <button onClick={()=>{setCount(count()+1)}}>{count()}</button> */}
    </div>
  )
}
