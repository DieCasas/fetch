import React, {useState, useEffect} from 'react'
import Item from './Item'

const Landing = () => {

    const [harrys, setHarrys] = useState([])

    useEffect(() => {
        fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes')
        .then(response => response.json())
        .then((data) => setHarrys(data));
    }, [])

    return (
        <div className='containerCards'>
            {harrys.map((user) => {
                return <Item key={user.id} info={user} />;
            })}
        </div>
    )
}
export default Landing ;