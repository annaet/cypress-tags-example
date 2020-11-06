describe('Example tests', () => {
  it('I am a regular test', () => {});

  it(['wip'], 'I am a wip test', () => {});

  it(['regression', 'smoke'], 'I am a smoke & regression test', () => {});

  it(['regression'], 'I am a regression test', () => {});

  it(['smoke'], 'I am a smoke test', () => {});

  it(['smoke', 'wip'], 'I am a wip smoke test', () => {});
});