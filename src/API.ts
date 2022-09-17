import { Quote } from './types'

import { getRandom } from './utils'

const mockQuotes: Quote[] = [
  {
    text: 'Slavery, protection, and monopoly find defenders, not only in those who profit by them but in those who suffer by them.',
    author: 'Frédéric Bastiat',
  },
  {
    text: "Everyone's effort will be directed toward snatching a scrap of fraternal privilege from the legislature. The suffering classes, although having the greatest claim, will not always have the greatest success.",
    author: 'Frédéric Bastiat',
  },
  { text: 'Competition is merely the absence of oppression.', author: 'Frédéric Bastiat' },
  {
    text: 'In short, is not liberty the freedom of every person to make full use of his faculties, so long as he does not harm other persons while doing so?',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'And what is this liberty, whose very name makes the heart beat faster and shakes the world?',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'When two workmen run after one master, wages fall; they rise when two masters run after one workman.',
    author: 'Frédéric Bastiat',
  },
  { text: 'The profit of the one is the profit of the other.', author: 'Frédéric Bastiat' },
  {
    text: 'I cannot possibly understand how fraternity can be legally enforced without liberty being legally destroyed...',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'The most urgent necessity is, not that the State should teach, but that it should allow education. All monopolies are detestable, but the worst of all is the monopoly of education.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'I cannot possibly understand how fraternity can be legally enforced without liberty being legally destroyed...',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'The most urgent necessity is, not that the State should teach, but that it should allow education. All monopolies are detestable, but the worst of all is the monopoly of education.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'Sometimes the law defends plunder and participates in it. Sometimes the law places the whole apparatus of judges, police, prisons, and gendarmes at the service of the plunderers, and treats the victim - when he defends himself - as a criminal.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'When law and morality contradict each other, the citizen has the cruel alternative of either losing his moral sense or losing his respect for the law.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'We hold from God the gift which includes all others. This gift is life -- physical, intellectual, and moral life.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'Legal plunder has two roots: One of them, as I have said before, is inhuman greed; the other is in false philanthropy.',
    author: 'Frédéric Bastiat',
  },
  { text: 'The law cannot organize labor and industry without organizing injustice.', author: 'Frédéric Bastiat' },
  { text: 'In the first place, the word universal conceals a gross sophism.', author: 'Frédéric Bastiat' },
  {
    text: 'It is impossible to introduce into society a greater change and a greater evil than this: the conversion of the law into an instrument of plunder.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'The law has been perverted through the influence of two very different causes—bare egotism and false philanthropy.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'The purpose of the socialists is to suppress liberty of association precisely in order to force people to associate together in true liberty.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'If socialists mean that under extraordinary circumstances, for urgent cases, the State should set aside some resources to assist certain unfortunate people, to help them adjust to changing conditions, we will, of course, agree. This is done now; we desire that it be done better. There is, however, a point on this road that must not be passed; it is the point where governmental foresight would step in to replace individual foresight and thus destroy it.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'What, then is, law? It is the collective organization of the individual right to lawful defense.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'The state is the great fictitious entity by which everyone seeks to live at the expense of everyone else.',
    author: 'Frédéric Bastiat',
  },
  { text: 'The safest way to make laws respected is to make them respectable.', author: 'Frédéric Bastiat' },
  {
    text: 'Government is the great fiction, through which everybody endeavors to live at the expense of everybody else.',
    author: 'Frédéric Bastiat',
  },
  { text: 'Every election is a sort of advance auction sale of stolen goods.', author: 'Frédéric Bastiat' },
  {
    text: 'The worst thing that can happen to a good cause is, not to be skilfully attacked, but to be ineptly defended.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'Each of us has a natural right, from God, to defend his person, his liberty, and his property.',
    author: 'Frédéric Bastiat',
  },
  { text: "Why don't you reform yourselves? That task would be sufficient enough.", author: 'Frédéric Bastiat' },
  {
    text: 'There is only one difference between a bad economist and a good one: the bad economist confines himself to the visible effect; the good economist takes into account both the effect that can be seen and those effects that must be foreseen.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'In the department of economy, an act, a habit, an institution, a law, gives birth not only to an effect but to a series of effects.',
    author: 'Frédéric Bastiat',
  },
  {
    text: 'A science of economics must be developed before a science of politics can be logically formulated. Essentially, economics is the science of determining whether the interests of human beings are harmonious or antagonistic.',
    author: 'Frédéric Bastiat',
  },
]

export function fetchQuote(): Promise<Quote> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      mockQuotes.length
        ? resolve(mockQuotes[getRandom(mockQuotes.length)])
        : reject(console.log(`%c NO QUOTES FOUNDED`, 'color: #89eff5; font-weight: 900; font-size: 14px;'))
    }, 500)
  })
}
