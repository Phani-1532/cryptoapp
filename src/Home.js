import React, { useMemo } from 'react'
import { useEffect, useState } from 'react';
import ImgCard from './ImgCard';

function Home() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false').then(response => response.json()).then(coin => setData(coin))
    }, [])

    let data1 = useMemo(() =>{
        console.log(data)
        return(
            data.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))
        )
    },[data, search])
    return (
        <>
            <div className="header">
            <h1>CRYPTO APP</h1>
                <input type='text' placeholder='Search for a Coin....' value={search} onChange={(e) => { setSearch(e.target.value) }} />
            </div>
            {
                data.length >= 1 ? <div className='grid-container'>
                    {data1.map(coin => <ImgCard coin={coin}></ImgCard>)}
                </div> : <h2>Data not yet loaded</h2>
            }
        </>

    )
}

export default Home
