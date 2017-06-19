import { Cacheable } from "./CacheableInterface";
/**
 * Created by Andre Hickmann on 19.06.2017.
 */
export class CachedObject implements Cacheable {

    private object: any;
    private id: string;

    /**
     * creating new cache-instance for cache.
     *
     * @param id identifier for object
     * @param obj object to cache
     */
    constructor(id: string, obj: any) {
        this.object = obj;
        this.id = id;
    }

    getId() : string {
        return this.id;
    }

    setId(id: string) {
        this.id = id;
    }

    getObject(): any {
        return this.object;
    }

    setObject(obj: any) {
        this.object = obj;
    }

    /**
     * @todo: has to be implemented
     * @return {boolean}
     */
    isExpired(): boolean {
        return true;
    }
}