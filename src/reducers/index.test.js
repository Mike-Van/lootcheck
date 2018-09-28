import rootReducer from './index.js'

describe('rootReducer', () => {
  it('initializes the default stat', () => {
    expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}})
  })
}) 