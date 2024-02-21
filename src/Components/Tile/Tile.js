import './Tile.css';

const Tile = ({number,moveTile}) =>
    <div 
        className={`number ${number.value === 16 ? 'disabled' : ''} slot--${number.index}`}
        onClick={() => moveTile(number)}
    >
        {number.value === 16 ? '' : number.value}
    </div>

export default Tile