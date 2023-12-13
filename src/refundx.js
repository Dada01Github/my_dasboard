import React from "react"
export default function Refundx(props) {
    console.log(props)
    return (
        <div>
            <h3> Full_name:{props.full_name}</h3>
            <p> Asset_id:{props.asset_id} </p>
            <p> User_id:{props.user_id} </p>
            <p> Amount:{props.amount}</p>
            <p> Symbol:{props.symbol} </p>
            <p> Identity_number:{props.identity_number} </p>
            <hr />
        </div>
    )

}