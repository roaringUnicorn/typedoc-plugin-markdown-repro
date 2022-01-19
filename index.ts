export type ApiResponse = {
    /**
     This pipe will not be escaped: { 'dataIDs': 'ok'|'ko' }
     */
    dataIDs: { [dataId: string]: 'ok' | 'ko' }
    /**
     * This will be fine: { 'itemIDs': 'ok'\| 'ko' }
     */
    itemIDs: { [itemId: string]: 'ok' | 'ko' }
    /**
     * An ugly solution:  { 'userIDs': 'ok' &#124; 'ko' }
     */
    userIDs: { [userId: string]: 'ok' | 'ko' }
}

export interface demoInterface {
    /**
     * much wow, such function
     * @param {string|number} arg - correctly escaped argument
     * @return {string|number}
     */
    myFunc<T extends string | number> (arg: T): T
}
