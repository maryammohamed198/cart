import React, {useState, useEffect} from "react";
import Homeslider from "../components/section/homeslider";
import { Container } from "react-bootstrap";
import Homecards from "../components/section/homecards";
import * as prod_cat from '../api/product_category'
import "../components/section/slider.css";
import Header from "../components/Navs/Header";
import { types } from "./typesenum";
import { useParams, useLocation } from 'react-router-dom';

export default function Home() {
  const { id } = useParams();
  const prevIdRef = React.useRef(id);
  const location = useLocation();
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const getCategory = async () => {
      await prod_cat.all_product_category().then(e => {
        setCategories(e.response)
      })
    }
    getCategory()
  },[])
  useEffect(() => {
    if (prevIdRef.current !== id) {
      window.location.reload();
    }
    // Update the stored 'id' for the next comparison
    prevIdRef.current = id;
  }, [id]);
  return (
    <div>
       <Header></Header>
        
       <div
        className="homee"
        style={{ height: "fit-content", position: "relative", top: "70px" }}
      >
        <div
          className="d-flex"
          style={{ height: "500px", justifyContent: "center", borderRadius:"50px" }}
        >
          <Homeslider></Homeslider>
        </div>

        <Container className="my-4  " style={{ justifyContent: "center" }}>
          <div>
            <div className="" style={{ height: "fit-content" }}>
              <h1 style={{display:"flex",justifyContent:"center"}}>{(id?(categories?.find((obj) => obj._id ===id))?.name:"")||""}</h1>
              {types?.map((type, index)=>(<Homecards  type_name={type}
              />))}          
            </div>
          </div>
        </Container>
      </div>
    </div>
    );
}
