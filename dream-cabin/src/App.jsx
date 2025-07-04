import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyle';
import Button from './ui/Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const StyleApp = styled.div`
  background-color: orchid;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <H1>Dream Cabin</H1>
        <Button>Check IN</Button>
        <Button>Check Out</Button>

        <Input type="number" placeholder="Number of guests"></Input>
      </StyleApp>
    </>
  );
}

export default App;
