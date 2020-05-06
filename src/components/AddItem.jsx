import React from 'react'

export const AddItem = () => {
    return (
        <>
            <form>
                <label>Name:
                <input type="text" name="name" />
                </label>
                <label>Amount:
                <input type="number" name="amount" />
                </label>
                <input className="btn" type="submit" value="Submit"/>
            </form>
        </>
    )
}
