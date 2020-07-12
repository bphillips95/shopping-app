import React from 'react'

export default function Filter({setFilter}) {
    return (
        <div  style={{
            position: "absolute",
            left: '10%',
            top: '5%'}} className="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Filter Items
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
        <button value={""} onClick={() => setFilter("")} class="dropdown-item" type="button">All</button>
          <button value={"dairy"} onClick={() => setFilter("dairy")}
           class="dropdown-item" type="button">Dairy</button>
          <button value={"cereal"} onClick={() => setFilter("cereal")} class="dropdown-item" type="button">Cereals</button>
        </div>
      </div>
    )
}
