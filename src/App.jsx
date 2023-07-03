import { useState } from "react";
import "./App.css";
import SubmitButton from "./Submit-button/SubmitButton";
import Button from "./button/Button";
import Card from "./card/Card";
import RatingButton from "./rating-button/RatingButton";
import Text from "./text/Text";
import Title from "./title/Title";

function App() {
  const [currentlyClicked, setCurrentlyClicked] = useState(0);
  const onClick = (value) => {
    setCurrentlyClicked((previous) => {
      if (previous === value) return 0;
      return value;
    });
  };
  return (
    <Card>
      {/* <button>Submit</button>
      <Title>ABC</Title>
      <Title as="h2">ABC</Title>
      <Title as="h3">ABC</Title>
      <Title as="h4">ABC</Title>
      <Title as="h5">ABC</Title>
      <Title as="h6">ABC</Title>
      <Text as="span">ADEEE</Text>
      <Text as="article">ADEEE</Text>
      <Text as="blockquote">ADEEE</Text> */}
      <Button>A</Button>
      <Title as="h2">How did we do?</Title>
      <Text className="blala">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        temporibus aperiam voluptates perspiciatis quae consequuntur dolor?
        Perferendis iusto numquam laborum officia nesciunt, aliquam culpa magnam
        libero eos, aperiam labore nam.
      </Text>
      <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
        1
      </RatingButton>
      <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
        2
      </RatingButton>
      <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
        3
      </RatingButton>
      <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
        4
      </RatingButton>
      <RatingButton currentlyClicked={currentlyClicked} setValue={onClick}>
        5
      </RatingButton>
      <SubmitButton currentlyClicked={currentlyClicked} setValue={onClick}>
        Submit
      </SubmitButton>
    </Card>
  );
}

export default App;
