import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyleApp = styled.div`
  /* background-color: orchid; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">Dream Cabin</Heading>
            <div>
              <Heading as="h2">Check In and Out</Heading>
              <Button variation="primary" size="medium">
                Check IN
              </Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
}

export default App;
