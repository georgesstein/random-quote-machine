import { useState } from 'react'

import useQuoteMachine from './useQuoteBox'

import QuoteBox from './QuoteBox'

import * as El from './QuoteMachine.styles'
import githubIcon from './assets/github-icon.svg'

export default function QuoteMachine() {
  const [color, setColor] = useState<string>('#f39c12')
  const quoteMachine = useQuoteMachine()

  if (quoteMachine.status === 'error') {
    return <div>error</div>
  }

  return (
    <El.Wrapper baseBackgroundColor={color}>
      <El.GithubLink href='https://github.com' target='_blank' rel='noreferrer'>
        <El.GithubIcon src={githubIcon} alt='github-icon' />
      </El.GithubLink>
      {quoteMachine.status !== 'initial-loading' && (
        <QuoteBox
          quote={quoteMachine.quote}
          animation={quoteMachine.status === 'fetched' ? 'fade-in' : 'fade-out'}
          baseColor={color}
          onNewQuoteButtonClick={quoteMachine.status === 'fetched' ? quoteMachine.loadNewQuote : undefined}
        />
      )}
    </El.Wrapper>
  )
}
