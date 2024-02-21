import { useEffect, useState } from 'react';
import './Board.css';
import Field from '../Field/Field';
import Tile from '../Tile/Tile';
import Winner from '../Winner/Winner';
import ShuffleButton from '../Shufflebutton/ShuffleButton';


const Board = () => {

    const shuffle = () =>
        new Array (16)
            .fill()
            .map((_,i) => i+1)
            .sort(() => Math.random() - .5)
            .map((x,i) => ({value : x, index : i}))

    const [numbers, setNumbers] = useState([])

    const moveTile = tile => {
        const i16= numbers.find(n => n.value===16).index
        if(![i16-1,i16+1,i16-4,i16+4].includes(tile.index))
            return

        const newNumbers =
            [...numbers]
            .map(number => {
                if (number.index !== i16 && number.index !== tile.index)
                    return number
                else if (number.value === 16)
                    return {value: 16, index:tile.index}

                return {value : tile.value, index:i16}
            })

        setNumbers(newNumbers)
    }

    const handleKeyDown = e => {
        const i16= numbers.find(n => n.value===16).index
        if (e.keyCode === 37 && !(i16 % 4 === 3))
            moveTile(numbers.find(n => n.index ===i16 + 1))
        if (e.keyCode === 38 && !(i16 > 11))
            moveTile(numbers.find(n => n.index ===i16 + 4))
        if (e.keyCode === 39 && !(i16 % 4 === 0))
            moveTile(numbers.find(n => n.index ===i16 - 1))
        if (e.keyCode === 40 && !(i16 < 4))
            moveTile(numbers.find(n => n.index ===i16 - 4))
    }

    const reset = () => setNumbers(shuffle())

    useEffect(reset, [])

    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown)
        return () => document.removeEventListener('keydown',handleKeyDown)
    })

    return <div className='game'>
        <div className='board'>
            <Field/>
            {numbers.map((x,i) =>
                <Tile key={i} number={x} moveTile={moveTile}/>
            )}
        </div>
        <Winner numbers={numbers}/>
        <ShuffleButton reset={reset}/>
    </div>
}

export default Board