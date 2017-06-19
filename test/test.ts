import { Cache } from '../src/cache';
import { CachedObject } from '../src/CachedObject';
import { expect } from 'chai';

let cache = new Cache('test');

describe('Testing cache instance', () => {
    describe('Creating Cache Instance "name".', () => {
        it('getting name of cache should return: test', () => {
            const result = cache.getName();
            expect(result).to.equal('test');
        });
    });

    describe('Adding 3 items to cache...', () => {
        it('getting non existing item "1" should throw an error', () => {
            cache.addItem(new CachedObject('entry1', 1));
            cache.addItem(new CachedObject('entry2', 2));
            cache.addItem(new CachedObject('entry3', 3));
            expect(() => {
                cache.getItem('1');
            }).to.throw(Error, 'No cache item with key "1" found.');
        });
        it('Getting item "entry1" should return 1', () => {
            const result = cache.getItem('entry1');
            expect(result).to.be.an.instanceof(CachedObject);
            expect(result.getObject()).to.equal(1);
        });
        it('getting size of cache should return: 3', () => {
            const result = cache.count();
            expect(result).to.equal(3);
        })
    });

    describe('removing 1 item from cache', () => {
        it('getting size of cache should return: 2', () => {
            cache.removeItem('entry2');
            const result = cache.count();
            expect(result).to.equal(2);
        });
    });

    describe('clearing the cache', () => {
        it('getting the size should return 0', () => {
            cache.clear();
            const result = cache.count();
            expect(result).to.equal(0);
        });
    });
});

