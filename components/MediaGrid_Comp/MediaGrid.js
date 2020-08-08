import QuestionCard from "../QuestionCards";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";

function MediaGrid(course, year) {
  const [ItemArray, setItemArray] = useState([]);
  //const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://kitsu.io/api/edge/anime?filter[text]=naruto")
      // fetch("URL" + course + year)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setItemArray(response.data);
      })
      .catch(() => console.log("it didn't work"));
  }, []);

  var Cards = [];
  ItemArray.forEach((el, i) => {
    //console.log(ItemArray.length);
    if (el === undefined) {
      return;
    } else {
      Cards.push(
        <Grid key={"card_" + i}>
          <QuestionCard
            QuestionTitle={el["attributes"]["canonicalTitle"]}
            Description={el["attributes"]["synopsis"]}
            Name={el["attributes"]["slug"]}
            Date={el["attributes"]["startDate"]}
          />
        </Grid>
      );
    }
  });

  return (
    <div>
      <Grid>{Cards}</Grid>
    </div>
  );
}

export default MediaGrid;
