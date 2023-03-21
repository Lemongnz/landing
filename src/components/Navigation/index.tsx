import Bullet from "./Bullet";
import { StyledNavigation } from "./styles";

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul ref="list">
        <Bullet name="one" ordinal="first" />
        <Bullet name="two" ordinal="second" />
        <Bullet name="three" ordinal="third" />
        <Bullet name="four" ordinal="fourth" />
        <Bullet name="five" ordinal="fifth" />
      </ul>
    </StyledNavigation>
  );
};

// props: {
//   name: { type: String, required: true },
//   ordinal: { type: String, required: true },
// },

export default Navigation;
