import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = ({ numberOfCakes, buyCake }) => {
  return (
    <div>
      <h2>number of cakes - {numberOfCakes}</h2>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = ({ cake }) => ({
  numberOfCakes: cake.numberOfCakes,
});

const mapDispatchToProps = (dispatch) => ({
  buyCake: () => dispatch(buyCake()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
