import React from "react"
import ReactDOM from "react-dom"
import Refundx from "./refundx"
import Refundlist from "./refundlist"

export default function App() {
    const refundElements = Refundlist.map(list => {
        console.log(list)
        return (
            <Refundx 
            full_name ={list.full_name} 
            asset_id={list.asset_id} 
            user_id={list.user_id} 
            amount={list.amount} 
            symbol={list.symbol} 
            identity_number={list.identity_number}
            />
        )
    })
    return( 
        <div>
            {refundElements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))