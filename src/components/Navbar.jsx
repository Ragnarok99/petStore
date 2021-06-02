import styled from "styled-components";
import {Container} from "@material-ui/core"

const Title = styled.span`
  background-color: red;
  font-size: 40px;
`;

const NavContainer = styled(Container)`
color: green;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <Title>este es mi text</Title>
    </NavContainer>
  );
};

export default Navbar;
