import './Row.css';
import MyButton from "./MyButton";

function Row() {
  return (
    <p className='row'>
      <MyButton className="button" />
      <MyButton className="button" />
      <MyButton className="button" />
    </p>
  )
}

export default Row;