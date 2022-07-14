import ProyectItem from "../proyect-item";
import { Container } from "./styles";

const proyects = [
  {
    id: 1,
    title: "Proyecto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    source: "https://www.google.com",
    tech: ["HTML", "CSS", "JS"],
  },
  {
    id: 2,
    title: "Proyecto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    source: "https://www.google.com",
    tech: ["HTML", "CSS", "JS", "React"],
  },
  {
    id: 3,
    title: "Proyecto 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
    image:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    source: "https://www.google.com",
    tech: ["React", "TypeScript"],
  },
];

export default function Proyect() {
  return (
    <Container>
      {proyects.map((proyect) => (
        <ProyectItem key={proyect.id} proyect={proyect} />
      ))}
    </Container>
  );
}
