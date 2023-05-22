import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { AuthContext } from "../../component/providers/AuthProvider";
import DollCard from "./dollCard";
import './Category.css'

const Category = () => {
  const { toys } = useContext(AuthContext);
  console.log(toys);
  var [filterToys, setFilterToys] = useState([]);
  var [selectCategory, setSelectCategory] = useState("Baby Dolls");
  useEffect(() => {
    var toy = toys.filter((t) => t.subCategory == selectCategory);
    setFilterToys(toy);
  }, [selectCategory, toys]);
  console.log(toys.length);

  return (
    <div >
      <h2 className="mt-4 text-center">Shop By Category</h2>
  
   <Tabs
        defaultActiveKey="Baby Dolls"
        id="fill-tab-example"
        className="mb-3 mt-4 tab-card"
        onSelect={(category) => setSelectCategory(category)}
        justify
      >
      

        <Tab eventKey="Baby Dolls" title="Baby Dolls">
         <div className="CatCard">
         {filterToys.map((doll) => (
            <DollCard key={doll._id} doll={doll}></DollCard>
          ))}
         </div>
        </Tab>
        <Tab eventKey="Barbie" title="Barbie">
        <div className="CatCard">
         {filterToys.map((doll) => (
            <DollCard key={doll._id} doll={doll}></DollCard>
          ))}
         </div>
        </Tab>
        <Tab eventKey="American girl" title="American girl">
        <div className="CatCard">
         {filterToys.map((doll) => (
            <DollCard key={doll._id} doll={doll}></DollCard>
          ))}
         </div>
        </Tab>

        
      </Tabs>


   </div>
   
  );
};

export default Category;
