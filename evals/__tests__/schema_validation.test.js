const fs = require('fs');
const schema = JSON.parse(fs.readFileSync('./schema/regulatory-schema.json', 'utf8'));

describe('Regulatory Schema Integrity', () => {
  test('should have a valid version and domain', () => {
    expect(schema.version).toBeDefined();
    expect(schema.domain).toBe('FinTech / RegTech');
  });

  test('all governance rules must have a risk level', () => {
    schema.governance_rules.forEach(rule => {
      expect(['Critical', 'High', 'Medium', 'Low']).toContain(rule.risk_level);
    });
  });

  test('rules must include validation logic for agents', () => {
    schema.governance_rules.forEach(rule => {
      expect(rule.validation_logic).toBeDefined();
    });
  });
});