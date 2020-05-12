import React, {useState, useContext} from 'react'

export const AddItem = () => {

    // const context = useContext(Context)

    const [value, setvalue] = useState("")
    const [amount, setamount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
       
    }
    
    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <label>Name:
                <input type="text" name="name" value={value} onChange={(e) => setvalue(e.target.value)} />
                </label>
                <label>Amount:
                <input type="number" name="amount" value={amount} onChange={(e) => setamount(e.target.value)} />
                </label>
                <input className="btn" type="submit" value="Submit"/>
            </form> */}
        </>
    )
}
