import { getNowTimestamp, getFriendlyFromTimestamp } from '../dateUtils'

describe('getNowTimestamp', () => {
  it('gets a date timestamp', ()=> {
    expect(getNowTimestamp()).toBeGreaterThanOrEqual(1051117960681)
    expect(getNowTimestamp()).toBeLessThan(9951117960681)
  })
})

describe('getFriendlyFromTimestamp', () => {
  it('gets a date string', ()=> {
    expect(getFriendlyFromTimestamp(1651117960681)).toBe("2022-04-28 13:52:40")
  })
})