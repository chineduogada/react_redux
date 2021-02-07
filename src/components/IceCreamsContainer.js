import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamsContainer = ({ numberOfIceCreams, buyIceCream }) => {
  return (
    <div>
      <h1>Number of iceCreams - {numberOfIceCreams}</h1>
      <button onClick={buyIceCream}>buy iceCreams</button>
    </div>
  );
};

const mapStateToProps = ({ iceCream }) => ({
  numberOfIceCreams: iceCream.numberOfIceCreams,
});

const mapDispatchToProps = (dispatch) => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamsContainer);
