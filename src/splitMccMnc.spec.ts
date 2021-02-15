import { splitMccMnc } from './splitMccMnc'

describe('splitMccMnc', () => {
	it('should derive a mcc and mnc number from a combined string', () => {
		expect(splitMccMnc('26201')).toEqual({
			mcc: 262,
			mnc: 1,
		})
	})
})

describe('splitMccMnc', () => {
	it('should derive a mcc and mnc number from a combined string', () => {
		expect(splitMccMnc(26201)).toEqual({
			mcc: 262,
			mnc: 1,
		})
	})
})
