import React from "react";
import Card from "./Card";
function CardItem() {
  const arrOfObj = [
    {
      name: "Apple",
      title: "Crisp and sweet, apples are a timeless snacking favorite",
    },
    {
      name: "Banana",
      title:
        "Portable and naturally sweet, bananas are perfect on-the-go energy.",
    },
    ,
    {
      name: "Mango",
      title:
        "The king of fruits, celebrated for its luscious sweetness and tropical flavor",
    },
    {
      name: "Orange",
      title: "Tangy and refreshing, oranges are vitamin C powerhouses",
    },
  ];

  const data = arrOfObj.map(function (value, index) {
    return (
      <div key={index}>
        <Card props={value} />
      </div>
    );
  });

  return <div className="flex flex-wrap">{data}</div>;
}
export default CardItem;
