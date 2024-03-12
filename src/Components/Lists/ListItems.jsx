import React from "react";
import StaticList from "./StaticList";
import DynamicList from "./DynamicList";

function ListItem() {
    const arr = ["Item 1", "Item 2", "Item 3", "Item 4"];
    const items = arr.map((value, index) => {
        return <StaticList item={value} key={index} />
    })
    return (
        <>
            <h1>Static List</h1>
            {items}
            <DynamicList arr={arr} />
        </>
    )
}

export default ListItem;