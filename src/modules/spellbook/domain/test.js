import {assert} from 'chai';
import Domain from './domain.js';

let domain;

describe('domain', function testDomain() {
	beforeEach(() => {
		domain = new Domain();
	});

	it('should have a name', () => {
		assert.property(domain, 'name');
	});
});
