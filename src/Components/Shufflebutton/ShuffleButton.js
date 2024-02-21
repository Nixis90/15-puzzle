import './ShuffleButton.css';

const ShuffleButton = ({reset}) =>
    <div className='button-wrapper'>
        <button onClick={reset}>Nytt spel</button>
    </div>

export default ShuffleButton