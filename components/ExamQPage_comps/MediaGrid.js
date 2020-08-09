import QuestionCard from "../ExamQPage_comps/QuestionCards";
import Grid from "@material-ui/core/Grid";
import React, { useState, useEffect } from "react";
import config from "../../lib/config";

function MediaGrid(course, year) {
  const [ItemArray, setItemArray] = useState([]);
  //const [count, setCount] = useState(0);

  // useEffect(() => {
  //   fetch("https://kitsu.io/api/edge/anime?filter[text]=naruto")
  //     // fetch("URL" + course + year)
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setItemArray(response.data);
  //     })
  //     .catch(() => console.log("it didn't work"));
  // }, []);

  const [classes, setClasses] = useState([]);
  // fetch data
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch(`${config.HOST}/api/classes/COMPSCI335`);
      const classesJson = await res.json();
      setClasses(classesJson);
    };
    fetchClasses();
  }, []);

  const [posts, setPosts] = useState([]);
  // fetch data
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${config.HOST}/api/posts`);
      const postsJson = await res.json();
      setPosts(postsJson);
    };
    fetchPosts();
  }, []);

  var Cards = [];
  posts.forEach((el, i) => {
    //console.log(ItemArray.length);
    if (el === undefined) {
      return;
    } else {
      Cards.push(
        <Grid key={"card_" + i}>
          <QuestionCard
            QuestionTitle={el["title"]}
            Description={el["body"]}
            Name={el["userID"]}
            Date={el["date"]}
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
