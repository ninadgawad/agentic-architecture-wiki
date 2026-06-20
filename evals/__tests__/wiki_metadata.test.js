const fs = require('fs');
const path = require('path');

const wikiFiles = fs.readdirSync('./wiki').filter(file => file.endsWith('.md'));

describe('Wiki Quality Control', () => {
  test.each(wikiFiles)('%s should contain a Trade-offs section', (fileName) => {
    const content = fs.readFileSync(path.join('./wiki', fileName), 'utf8');
    expect(content).toMatch(/## Architectural Trade-offs/);
  });

  test.each(wikiFiles)('%s should include a visual architecture diagram', (fileName) => {
    const content = fs.readFileSync(path.join('./wiki', fileName), 'utf8');
    expect(content).toMatch(/```mermaid/); // Ensures visual thinking is present [8]
  });
});