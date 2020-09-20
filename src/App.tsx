import { css, Global } from '@emotion/core';
import styled from '@emotion/styled';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  color: var(--text);
  background-color: var(--background);
`;

function App() {
  return (
    <>
      <Global
        styles={
          css`
            :root {
              --primary: #202124;
              --secondary: #3a3d42;
              --text: #ffffff;
              --background: white;
              --font: 'Courier New', Courier, monospace;
            }
            body {
              margin: 0;
              box-sizing: border-box;        
            }
          `
        }
      />
      <Container>
        <Home/>
      </Container>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
