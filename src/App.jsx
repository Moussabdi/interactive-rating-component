import "./App.css";
import SubmitButton from "./Submit-button/SubmitButton";
import Card from "./card/Card";
import RoundButton from "./round-button/RoundButton";
import Text from "./text/Text";
import Title from "./title/Title";

function App() {
  return (
    <Card>
      <button>Submit</button>
      <Title>ABC</Title>
      <Title as="h2">ABC</Title>
      <Title as="h3">ABC</Title>
      <Title as="h4">ABC</Title>
      <Title as="h5">ABC</Title>
      <Title as="h6">ABC</Title>
      <Text as="span">ADEEE</Text>
      <Text as="article">ADEEE</Text>
      <Text as="blockquote">ADEEE</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        temporibus aperiam voluptates perspiciatis quae consequuntur dolor?
        Perferendis iusto numquam laborum officia nesciunt, aliquam culpa magnam
        libero eos, aperiam labore nam.
      </Text>
      <RoundButton>1</RoundButton>
      <RoundButton>2</RoundButton>
      <RoundButton>3</RoundButton>
      <RoundButton>4</RoundButton>
      <RoundButton>5</RoundButton>
      <SubmitButton>Submit</SubmitButton>
    </Card>
  );
}

export default App;
