import React from 'react';
import { ChakraProvider, Box, Grid } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Portfolio from './components/Portfolio';
import MyModal from './components/Modal/Modal';
import theme from './theme/theme.js';

import PanelContainer from './components/Layout/PanelContainer';
import PanelContent from './components/Layout/PanelContent';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <PanelContent>
        <PanelContainer>
          <Portfolio
            title={'Projects'}
            description={'Architects design houses'}
          />
          <MyModal />
        </PanelContainer>
      </PanelContent>
    </ChakraProvider>
  );
}

export default App;
