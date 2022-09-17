import { useState, useEffect } from 'react'

import * as BastiatAPI from './API'
import { Quote } from './types'

import { chooseRandomColor } from './utils'

type UseQuoteBox = (
  | { status: 'initial-loading' }
  | { status: 'fetched'; quote: Quote; loadNewQuote: () => void }
  | { status: 'loading-one-more'; quote: Quote }
  | { status: 'error'; errorMessage: string }
) & { baseColor: string }

type UseQuoteBoxState = Exclude<UseQuoteBox, { status: 'fetched' }> | { status: 'fetched'; quote: Quote; baseColor: string }

const COLORS = ['#f39c12', '#2c3e50', 'magenta', '#16a085', '#f39c12', '#e74c3c', '#9b59b6']
const INITIAL_COLOR = '#f39c12'
export const ANIMATION_DURATION = 300

export default function useQuoteMachine(): UseQuoteBox {
  const [state, setState] = useState<UseQuoteBoxState>({ status: 'initial-loading', baseColor: INITIAL_COLOR })

  useEffect(() => {
    setTimeout(() => loadQuote(setState), ANIMATION_DURATION)
  }, [])

  const loadNewQuote = () => {
    if (state.status !== 'fetched') throw new Error('Inconsistent state')
    

    setState({ status: 'loading-one-more', quote: state.quote, baseColor: chooseRandomColor(COLORS, state.baseColor) })
    setTimeout(() => loadQuote(setState), ANIMATION_DURATION)
  }

  if (state.status === 'fetched') {
    return { status: 'fetched', quote: state.quote, loadNewQuote, baseColor: state.baseColor }
  }

  return state
}

function loadQuote(setState: (state: UseQuoteBoxState | ((prevState: UseQuoteBoxState) => UseQuoteBoxState)) => void) {
  BastiatAPI.fetchQuote()
    .then(quote => setState(state => ({ status: 'fetched', quote: quote, baseColor: state.baseColor })))
    .catch(error => setState({ status: 'error', errorMessage: error, baseColor: 'red' }))
}
