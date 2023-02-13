import { createSignal } from 'solid-js'
import { site } from '../../site.config'

export default function Hero(props) {
  const [count, setCount] = createSignal(0)
  return (
    <div class='flex justify-between m-4'>
      <div className='text-xl text-zinc-800'>{props.title}</div>
      <div></div>
    </div>
  )
}
