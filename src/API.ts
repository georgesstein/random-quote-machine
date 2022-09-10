import { Quote } from './types'

export function fetchQuote(): Promise<Quote> {
  return fetch('https://api.breakingbadquotes.xyz/v1/quotes').then(response =>
    response.ok 
      ? response.json().then(data => { return { text: data[0].quote, author: data[0].author }})
      : Promise.reject(response.status)
  )
}
