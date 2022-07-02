import React from 'react'
import './index.css'

export default function App() {
    const [colors, setColors] = React.useState(['white', 'white', 'white', 'white'])

    const colorArr = ['blue', 'teal', 'orange', 'purple', 'black']
    const ranColor =() => Math.floor(Math.random() * colorArr.length)

    const smallTimeDj = () => {
        setColors(prevColor => prevColor === 'black' ? 'white':'black')
    }

    const partyDj = () => {
        setColors('purple')
    }
    return (
        <div>
            <div className="container">
                <div className="container--one" style={{backgroundColor: colors}}>
                    <h3>Box1</h3>
                </div>
                <div className="container--two" style={{backgroundColor: colors}}>
                    <h3>Box2</h3>
                </div>
                <div className="container--three" style={{backgroundColor: colors}}>
                    <h3>Box3</h3>
                </div>
                <div className="container--four" style={{backgroundColor: colors}}>
                    <h3>Box4</h3>
                </div>
            </div>

            <button className="container--buttons" onClick={smallTimeDj}>Small time DJ</button>
            <button className="container--buttons" onClick={partyDj}>Party DJ</button>
            <button className="container--buttons" onClick={() => setColors('blue')}>Left Blue</button>
            <button className="container--buttons" onClick={() => setColors('blue')}>Right Blue</button>
            <button className="container--buttons" onClick={() => setColors(colorArr[ranColor()])}>Big DJ 1</button>
            <button className="container--buttons" onClick={() => setColors(colorArr[ranColor()])}>Big DJ 2</button>
            <button className="container--buttons" onClick={() => setColors(colorArr[ranColor()])}>Big DJ 3</button>
            <button className="container--buttons" onClick={() => setColors(colorArr[ranColor()])}>Big DJ 4</button>
        </div>
    )
}