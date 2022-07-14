import { Container, List, ListItem, NavClose } from "./style";
import { RiCloseLine } from "react-icons/ri";

export default function NavMenu({ clicked, handleClick }: any) {
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
