import React from "react";
const imageurl = "https://placeimg.com/1200/480/nature"
const styles = {
  image:{
    backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(" + imageurl + ")"
  }
};
function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.image}>
      <div className="container-fluid">
        <h1 className="display-3 text-center text-white">Who's Who?</h1>
        <p className="lead text-center text-white">A Searchable and Sortable Employee Directory</p>
      </div>
    </div>
  );
}

export default Jumbotron;
