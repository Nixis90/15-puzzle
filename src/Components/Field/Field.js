import './Field.css';

const Field = () =>
    new Array (16)
        .fill()
        .map((_,i) => <div key={i} className="field"/>)

export default Field