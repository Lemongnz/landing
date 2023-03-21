import { Container, List, ListItem, NavClose } from "./styles";
import { RiCloseLine } from "react-icons/ri";

type NavMenuI = {
  clicked: boolean;
  handleClick: () => void;
};

export default function NavMenu({ clicked, handleClick }: NavMenuI) {
  return (
    <Container clicked={clicked}>
      <NavClose onClick={handleClick}>
        <RiCloseLine />
      </NavClose>
      <List>
        <ListItem>Inicio</ListItem>
        <ListItem>Sobre mí</ListItem>
        <ListItem>Proyectos</ListItem>
        <ListItem>Experiencia</ListItem>
        <ListItem>Contacto</ListItem>
      </List>
    </Container>
  );
}
