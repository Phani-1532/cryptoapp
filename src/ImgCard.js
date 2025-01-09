import React from 'react'

function ImgCard({ coin }) {
    return (
        <div key={coin.id}>
            <img src={coin.image} alt={coin.name} style={{ width: "70px", height: "70px", marginRight: "10px" }} />
            <h4 style={{color:'orange', marginBottom:'5px'}}>{coin.name} ({coin.symbol.toUpperCase()})</h4>
            <i>Rank : {coin.market_cap_rank}</i>
            <p>Market Cap : {coin.market_cap}</p>
            <p>Last Updated : {coin.last_updated}</p>
        </div>
    )
}

export default ImgCard
