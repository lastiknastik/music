import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: var(--main-bgcolor);
  display: flex;
`

export const GlobalStyle = createGlobalStyle`
:root{
    ${(props) => props.variables}
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  font-family: 'StratosSkyeng', sans-serif;
  cursor: pointer;
}

ul li {
    list-style: none;
}

html,
body {
  width: 100%;
  height: 100%;
  font-family: 'StratosSkyeng', sans-serif;
  color: var(--text-color);
}


@font-face {
  font-family: 'StratosSkyeng';
  src: local('StratosSkyeng');
  src: url('../public/fonts/StratosSkyeng.woff') format('woff2');
  font-weight: 400;
  font-style: normal;
}


button{
  cursor: pointer;
}
`
