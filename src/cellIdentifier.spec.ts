import { cellIdentifier } from "./cellIdentifier"

describe('cellId', () => {
    it('should generate a cellIdentifier from mncmcc, lac and cellId', () => {
        expect(cellIdentifier({
            mccmnc: 26201,
            lac: 54057,
            cellId: 34072331
        })).toEqual('26201-54057-34072331')
    })
})