import { useState } from 'react';
import reactLogo from './assets/react.svg';
import turboLogo from '/turbo.svg';
import viteLogo from './assets/vite.svg';
import '@kibolho/design-system/dist/index.css';
import { Button, Heading, Card, Logo, Body } from '@kibolho/design-system';
import { CoreSDK } from '@kibolho/core-api-sdk';

import React from 'react';

function App() {
  const [response, setResponse] = useState<string>();
  const fetch = async () => {
    if (!!response) {
      setResponse(undefined);
    } else {
      const response = await CoreSDK('fakeToken').api.mock.getMockData();
      setResponse(response);
    }
  };
  return (
    <div className="App">
      <div>
        <Logo href="https://turbo.build/" src={turboLogo} alt="Turbo logo" target="_blank" />
        <Logo href="https://vitejs.dev" src={viteLogo} alt="Vite logo" target="_blank" />
        <Logo href="https://reactjs.org" src={reactLogo} alt="React logo" target="_blank" />
      </div>
      <Heading>Admin App</Heading>
      <Card>
        <Button onClick={fetch}>
          {!!response ? `Message: ${response} - Click to clear response` : `Click to receive the sdk response`}
        </Button>
      </Card>
      <Body>This is a test application to prove the concept of a mono repo consuming packages.</Body>
      <Body>Click on the logos to learn more</Body>
    </div>
  );
}

export default App;
