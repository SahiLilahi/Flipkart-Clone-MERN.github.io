import { useEffect } from "react";
import NarBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { getProducts } from "../Redux/Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Home/Slide";
import MidSlide from "./Home/MidSlide";
import MidSection from "./Home/MidSection";

const Component = styled(Box)({
  padding: "20px 10px",
  background: "#F2F2F2",
});

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NarBar />
      <Component>
        <Banner />
        <MidSlide
          products={products}
          title="Deal of the Day"
          timer={true}
          multi={true}
        />
        <MidSection />

        <Slide
          products={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          products={products}
          timer={false}
          multi={true}
          title="Suggested Items"
        />
        <Slide
          products={products}
          timer={false}
          multi={true}
          title="Top Selection"
        />
        <Slide
          products={products}
          timer={false}
          multi={true}
          title="Recommended Items"
        />
        <Slide
          products={products}
          timer={false}
          multi={true}
          title="Top Picks"
        />
        <Slide
          products={products}
          timer={false}
          multi={true}
          title="Top Deals on Accessories"
        />
      </Component>
    </>
  );
};

export default Home;
