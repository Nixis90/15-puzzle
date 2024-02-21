import ShuffleButton from '../Shufflebutton/ShuffleButton';
import './Winner.css';

const Winner = ({numbers}) => {
    if (!numbers.every(n => n.value === n.index + 1))
        return null

    return <div className='winner'>
            <h2>Grattis, du vann!</h2>
            <ShuffleButton/>
        </div>
}

export default Winner