export const splitMccMnc = (
	mccmnc: string | number,
): { mnc: number; mcc: number } => {
	if (mccmnc == null) {
		throw 'No mnc mcc provided'
	}

	if (!(typeof mccmnc == 'string')) {
		mccmnc = mccmnc.toString()
	}

	if (mccmnc.length < 4) {
		throw 'mcc mnc string too short'
	}

	return {
		mcc: parseInt(mccmnc.substr(0, 3)),
		mnc: parseInt(mccmnc.substr(3)),
	}
}
