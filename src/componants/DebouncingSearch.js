import React, { useEffect, useState } from 'react'

const DebouncingSearch = () => {
    const [quirey, setQuirey] = useState('')
    const [debouncing, setDebouncing] = useState('')
    const [players, setPlayers] = useState([])
    const [msg, setMsg] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => setDebouncing(quirey), 1000)
        return () => clearTimeout(timer);
    }, [quirey])

    useEffect(() => {
        if (!debouncing.trim()) {
            setPlayers([])
            setMsg(true)
            return
        }

        const filtered = playerDummyData.filter((player) => player.name.toLowerCase().includes(debouncing.toLocaleLowerCase())
        )
        setPlayers(filtered)
        setMsg(false)
    }, [debouncing])

    const playerDummyData = [{
        name: 'virat kohli',
        battingStyle: 'Right-Hand_Batsman',
        ranking: 'No.1'
    },
    {
        name: 'rohit sharma',
        battingStyle: 'Right-Hand-Batsman',
        ranking: 'No.2',
        
    }, {
        name: 'shubhaman gill',
        battingStyle: 'Right-Hand_Batsman',
        ranking: 'No.3'
    },
    {
        name: 'rishbh pant',
        battingStyle: 'Left-Hand_Batsman',
        ranking: 'No.4'
    },
    {
        name: 'yashashvi jaishbal',
        battingStyle: 'left-Hand_Batsman',
        ranking: 'No.5'
    }]

    return (
        <div className='container d-flex justify-content-center'>
            <div className='row'>
                <div className='col-nd-12 my-5'>
                    <input value={quirey} onChange={(e) => { setQuirey(e.target.value) }} type='search' placeholder='type..' />
                    <ul className='list-unstyled'>
                        { quirey.trim() === '' ? null :
                         players.length > 0 ? (players.map((player) => (
                            <li key={player.name}>
                                <strong>{`Name - ${player.name}`}</strong>
                                <br />
                                <small>{`Batting-Style - ${player.battingStyle}`}</small>
                                
                                <li>{`Ranking - ${player.ranking}`}</li>
                            </li>
                        ))) : msg && <p>player not found</p>}



                    </ul>
                </div>
            </div>

        </div>
    )
}

export default DebouncingSearch
