import React from "react";
import Card from "./Card";
import Contact from "./Contact";
import Data from "./Data";
import Navbar from "./Navbar";

// function ncard(val){
//   // value, index number, Which array
//   // return (
//   //   <Card imgsrc= {val.imgsrc}
//   //   title = {val.title}
//   //   sname = {val.sname}
//   //   link = {val.link}
//   // />
//   // )
// }
const App = () => (
  <>
    <div className="nav">
      <Navbar />
    </div>
    {/* <div className="bg_img">
      <img className="bg_image" src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
    </div> */}
    <h1 className="heading__style">Netflix Series 2022</h1>
    {/* Array Map Method */}
    {/* function inside function */}
    {/* Map method needs a unique key and keys are necessary to improve performance of react app */}
    
    <div className="card_container">
    {Data.map((val) => {
      return (
        /* every card component should have a unique key */
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      );
    })}
    </div>
    {/* fat arrow function is much flexible than normal function declaration */}
    {/* const ncard = (val) => {return a+b } */}
    <Contact />
  </>
);

export default App;
