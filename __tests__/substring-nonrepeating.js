// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {substringNonrepeating} = require(`../challenges${version}/substring-nonrepeating.js`);

describe('substringNonrepeating test', () => {
  it('handles single-character strings', () => {
    expect(substringNonrepeating('b')).toBe(1);
    expect(substringNonrepeating('cc')).toBe(1);
    expect(substringNonrepeating('zzzzzzz')).toBe(1);
  });
  
  it('handles arbitrary strings', () => {
    expect(substringNonrepeating('kekekekeke')).toBe(2);
    expect(substringNonrepeating('lolk')).toBe(3);
    expect(substringNonrepeating('lolkekeke')).toBe(4);
    expect(substringNonrepeating('abcabcbb')).toBe(3);
    expect(substringNonrepeating('pwwkew')).toBe(3);
  });
  
  it('handles empty strings', () => {
    expect(substringNonrepeating('')).toBe(0);
  });
});

