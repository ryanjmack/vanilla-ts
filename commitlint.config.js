export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'perf', 'chore', 'refactor', 'docs']],
    'scope-empty': [2, 'always'],
  },
};
