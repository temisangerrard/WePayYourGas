import test from 'node:test';
import assert from 'node:assert/strict';
import { SITE, buildFallbackMailto } from '../src/config/site.ts';

test('an unset inbox routes print enquiries to the confirmed Instagram account', () => {
  const previous = SITE.contactEmail;
  try {
    SITE.contactEmail = '';
    assert.equal(buildFallbackMailto('Up to Me', '8" × 11"'), SITE.instagram);
  } finally {
    SITE.contactEmail = previous;
  }
});

test('a configured inbox receives the selected print and size without requesting a street address', () => {
  const previous = SITE.contactEmail;
  try {
    SITE.contactEmail = 'studio@example.com';
    const link = new URL(buildFallbackMailto('Light & shade?', '12" × 16"'));
    assert.equal(link.protocol, 'mailto:');
    assert.equal(link.pathname, 'studio@example.com');
    assert.match(link.searchParams.get('subject'), /Light & shade\?/);
    assert.match(link.searchParams.get('body'), /12" × 16"/);
    assert.doesNotMatch(link.searchParams.get('body'), /Shipping address/);
  } finally {
    SITE.contactEmail = previous;
  }
});
