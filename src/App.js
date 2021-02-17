import react, {components} from "react";

import { Title, TitleSmall } from './styles';

function App() {
  return (
    <div>
       <Title fontSize={20}>
         Hello World
         <span> little hello world</span>
       </Title>

       <TitleSmall>Herança</TitleSmall>
    </div>
  );
}

export default App;
