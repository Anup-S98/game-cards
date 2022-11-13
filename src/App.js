import React from "react";
import reportWebVitals from "./reportWebVitals";
import Data from "./Ndata";
import Card from "./Cards";

// function gCard(val) {
//   // console.log(val);
//   return <Card imgSrc={val.img} title={val.name} desc={val.desc} />;
// }

const App = () => {
  return (
    <>
      <div className="cards">
        {/* <Card imgSrc={Data[0].img} title={Data[0].name} desc={Data[0].desc} /> */}

        {Data.map((val) => {
          return (
            <Card
              key={val.id}
              imgSrc={val.img}
              title={val.name}
              desc={val.desc}
            />
          );
        })}
      </div>
    </>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;
