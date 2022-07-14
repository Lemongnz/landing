import { Container, Description, Source, Tech, Title } from "./styles";

export default function ProyectItem({ proyect }: any) {
  return (
    <Container>
      <img src={proyect.image} alt="proyect" />
      <Title>{proyect.title}</Title>
      <Description>{proyect.description}</Description>
      <Source>
        <a href={proyect.source} target="_blank" rel="noreferrer">
          Source
        </a>
      </Source>
      <Tech>
        {proyect.tech.map((tech: string) => {
          return <span key={tech}>{tech}</span>;
        })}
      </Tech>
    </Container>
  );
}
