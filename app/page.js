export default function Home() {
  let name = 'park'
  let age = 20
  return (
    <div>
      <h4 className='title-sub'>Vinyl fresh</h4>
      <p className='title-sub'>by dev { name }</p>
      <p className='title-sub'>hi my name is { name } and i am { age } years old</p>
    </div>
  )
}
