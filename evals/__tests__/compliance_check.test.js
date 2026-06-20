const fs = require('fs');

describe('Agentic Pattern Compliance', () => {
  test('Agent patterns must explicitly address PII persistence', () => {
    const agentWiki = fs.readFileSync('./wiki/agentic-governance-in-fintech.md', 'utf8');
    // Validates that the wiki entry explicitly discusses PII handling as per RULE-DATA-PRIV-01
    expect(agentWiki.toLowerCase()).toContain('pii');
  });
});