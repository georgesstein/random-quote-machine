import styled from 'styled-components'

export const QuoteBox = styled.div`
  width: 450px;
  height: max-content;
  padding: 40px 50px;
  border-radius: 3px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Raleway', sans-serif;
`

export const Top = styled.div<{ animation: 'fade-in' | 'fade-out'; baseColor: string }>`
  opacity: ${p => (p.animation === 'fade-in' ? 1 : 0)};
  color: ${p => p.baseColor};
  transition: opacity 1s, color 1s;
`

export const QuoteText = styled.h1`
  font-size: 1.75em;
  font-weight: 400;
  text-align: center;
`

export const QuoteMarks = styled.i`
  margin-right: 10px;

  &-pull-left {
    margin-right: 0.3em;
    display: inline-block;
    height: 100%;
  }
`

export const QuoteAuthor = styled.div`
  text-align: right;
  font-size: 1em;
  font-weight: 100;
  margin-top: 20px;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
`

export const TwitterLink = styled.a<{ baseColor: string }>`
  width: 40px;
  height: 100%;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s;
  background-color: ${p => p.baseColor};

  &:hover {
    opacity: 0.7;
  }
`

export const TwitterIcon = styled.img`
  height: 20px;
`

export const NewQuoteButton = styled.button<{ baseColor: string }>`
  height: 100%;
  border: none;
  border-radius: 3px;
  padding: 0px 30px;
  color: #fff;
  cursor: pointer;
  transition: background-color 1s;
  background-color: ${p => p.baseColor};

  &:hover {
    opacity: 0.7;
  }
`
