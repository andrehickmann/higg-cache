import {Cacheable} from "./CacheableInterface";
export class Cache {

    private name: string;

    private storage: Array<Cacheable> = [];

    /**
     * creating new cache instance.
     *
     * @param cachename name of the cache instance
     */
    constructor(
        cachename: string
    ) {
        this.name = cachename || 'id_' + (Math.floor(Math.random() * (10000000 - 1)) + 1);
    }

    /**
     * getting the name of the string
     *
     * @returns {string}
     */
    getName(): string {
        return this.name;
    }

    /**
     * getting item out of the cache.
     *
     * @param identifier string
     * @returns {Cachable}
     */
    getItem(identifier:string): Cacheable {
        let position = this.getItemIndex(identifier);
        if (position === false) {
            throw new Error('No cache item with key "' + identifier + '" found.');
        }
        return this.storage[position];
    }

    /**
     * checks if item is in the cache. if item is found function returns the
     * position in storage, otherwise false.
     *
     * @param identifier string
     * @returns {false|number}
     */
    hasItem(identifier: string): any {

        if (this.getItemIndex(identifier) !== false) {
            return true;
        }
        return false;
    }

    /**
     * adding an item to the cache.
     *
     * @param item any
     */
    addItem(item: Cacheable): void {
        this.storage.push(item);
    }

    /**
     * removing cache item
     * @param identifier
     */
    removeItem(identifier: string): void {
        let position = this.getItemIndex(identifier);
        if (position !== false) {
            this.storage.splice(position,1);
        }
    }

    /**
     * return current size of cache
     *
     * @returns {number}
     */
    count(): number {
        return this.storage.length;
    }

    /**
     * clears current cache instance.
     */
    clear(): void {
        this.storage = [];
    }

    /**
     * returning the index of the searched item in the cache-storage.
     * if the item could't be found, false is returned.
     *
     * @param identifier
     * @return {any}
     */
    private getItemIndex(identifier: string): any {
        for (let i = 0; i < this.count(); i++) {
            if (this.storage[i].getId() === identifier) {
                return i;
            }
        }
        return false;
    }
}