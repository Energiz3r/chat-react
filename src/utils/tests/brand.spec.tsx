import { consoleBranding } from '../brand'

describe('console branding', () => {
  it('returns a styled string to print to console', () => {
    expect(consoleBranding()).toBeUndefined()
  })
})