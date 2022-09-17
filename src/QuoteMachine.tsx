import useQuoteMachine from './useQuoteMachine'

import QuoteBox from './QuoteBox'

import * as El from './QuoteMachine.styles'
import githubIcon from './assets/github-icon.svg'

export default function QuoteMachine() {
  const quoteMachine = useQuoteMachine()

  if (quoteMachine.status === 'error') {
    return (
      <El.Wrapper baseBackgroundColor={quoteMachine.baseColor}>
        <El.GithubLink href='https://github.com/georgesstein/random-quote-machine' target='_blank' rel='noreferrer'>
          <El.GithubIcon src={githubIcon} alt='github-icon' />
        </El.GithubLink>
        <El.EmptyPage>No quotes found</El.EmptyPage>
      </El.Wrapper>
    )
  }

  return (
    <El.Wrapper baseBackgroundColor={quoteMachine.baseColor}>
      <El.GithubLink href='https://github.com/georgesstein/random-quote-machine' target='_blank' rel='noreferrer'>
        <El.GithubIcon src={githubIcon} alt='github-icon' />
      </El.GithubLink>
      {quoteMachine.status !== 'initial-loading' && (
        <QuoteBox
          quote={quoteMachine.quote}
          animation={quoteMachine.status === 'fetched' ? 'fade-in' : 'fade-out'}
          baseColor={quoteMachine.baseColor}
          onNewQuoteButtonClick={quoteMachine.status === 'fetched' ? quoteMachine.loadNewQuote : undefined}
        />
      )}
    </El.Wrapper>
  )
}
