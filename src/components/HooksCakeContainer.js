import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

const HooksCakeContainer = () => {
  const numberOfCakes = useSelector(({ cake }) => cake.numberOfCakes);

  const dispatch = useDispatch``;

  const handleClick = () => dispatch(buyCake());

  return (
    <div>
      <h2>(Hooks)Number of cakes - {numberOfCakes}</h2>
      <button onClick={handleClick}>(Hooks) buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
