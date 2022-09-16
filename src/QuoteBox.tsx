import * as El from './QuoteBox.styles'
import twitterIcon from './assets/twitter-icon.svg'

type Props = {
  quote: { text: string; author: string }
  baseColor: string
  animation: 'fade-in' | 'fade-out'
  onNewQuoteButtonClick: (() => void) | undefined
}

export default function QuoteBox(p: Props) {
  return (
    <El.QuoteBox>
      <El.Top animation={p.animation} baseColor={p.baseColor}>
        <El.QuoteText>
          <El.QuoteMarks className='quotes fa fa-quote-left fa-pull-left' aria-hidden='true'></El.QuoteMarks>
          {p.quote.text}
        </El.QuoteText>
        <El.QuoteAuthor>{p.quote.author}</El.QuoteAuthor>
      </El.Top>

      <El.Bottom>
        <El.TwitterLink baseColor={p.baseColor} href='https://twitter.com/intent/tweet' target='_blank' rel='noreferrer'>
          <El.TwitterIcon src={twitterIcon} alt='twitter-icon' />
        </El.TwitterLink>
        <El.NewQuoteButton baseColor={p.baseColor} onClick={p.onNewQuoteButtonClick} disabled={!p.onNewQuoteButtonClick}>
          New quote
        </El.NewQuoteButton>
      </El.Bottom>
    </El.QuoteBox>
  )
}
