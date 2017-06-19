export interface Cacheable {

    /**
     * getting the identifier of the cached object.
     */
    getId(): string

    /**
     * setting identifier of the cached object.
     *
     * @param id
     */
    setId(id: string);

    /**
     * get the object beeing cached.
     */
    getObject(): any;

    /**
     * setting the object beeing cached
     * @param obj
     */
    setObject(obj: any);

    /**
     * check ig the object is expiredd;
     */
    isExpired(): boolean;

}