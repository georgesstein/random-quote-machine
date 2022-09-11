export type DTOQuote = {
  quote: string
  author: string
}

export type Quote = {
  text: DTOQuote['quote']
  author: DTOQuote['author']
}
