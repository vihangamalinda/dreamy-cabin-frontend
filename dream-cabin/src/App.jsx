import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyleApp = styled.div`
  background-color: orchid;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Heading as="h1">Dream Cabin</Heading>
        <Heading as="h2">Check In and Out</Heading>
        <Button>Check IN</Button>
        <Button>Check Out</Button>

        <Heading as="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyleApp>
    </>
  );
}

export default App;
