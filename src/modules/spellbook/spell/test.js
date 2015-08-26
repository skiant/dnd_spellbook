import {assert} from 'chai';
import Spell from './spell.js';

let spell;

describe('spell', function testDomain() {
	beforeEach(() => {
		spell = new Spell('test spell', 2, 'test domain');
	});

	it('should have a name', () => {
		assert.property(spell, 'name', 'spell name not found');
		assert.equal(spell.name, 'test spell', 'not matching the required name');
	});

	it('should belong to a domain', () => {
		assert.property(spell, 'domain', 'spell domain not found');
		assert.equal(spell.domain, 'test domain', 'not matching the required domain');
	});

	it('should have  a level', () => {
		assert.property(spell, 'level', 'spell level not found');
		assert.equal(spell.level, 2, 'not matching the required level');
	});

	it('should not be prepared', () => {
		assert.strictEqual(spell.prepared, 0, 'spell prepared');
	});

	it('should be castable after preparation', () => {
		spell.prepare();
		spell.prepare();
		spell.prepare();
		assert.strictEqual(spell.prepared, 3, 'spell could not be prepared');
		assert.isTrue(spell.cast(), 'spell could not be cast');
		assert.isTrue(spell.cast(), 'spell could not be cast');
		assert.isTrue(spell.cast(), 'spell could not be cast');
		assert.strictEqual(spell.prepared, 0, 'spell not properly depleted');
	});
});
