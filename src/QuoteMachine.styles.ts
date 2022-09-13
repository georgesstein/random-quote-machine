import styled from 'styled-components'

export const Wrapper = styled.div<{ baseBackgroundColor: string }>`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.baseBackgroundColor};
  transition-property: background-color;
  transition-duration: 1s;
  
  /* .github-link{
    height: 40px;
    width: 40px;
    position: fixed;
    top: 20px;
    right: 20px;
  } */
`

export const GithubLink = styled.a`
  height: 40px;
  width: 40px;
  position: fixed;
  top: 20px;
  right: 20px;
`

export const GithubIcon = styled.img``
