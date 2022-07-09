import { Container } from "./styles";

export default function BurguerButton({ clicked, handleClick }: any) {
  return (
    <Container>
      <div
        onClick={handleClick}
        className={`icon nav-icon-5 ${clicked ? "open" : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Container>
  );
}
