export const splitMccMnc = (mccmnc: string) : {mnc: number, mcc: number} => {
    if(mccmnc.length < 4) {
        throw "mcc mnc string too short"
    }

    return {
        mcc: parseInt(mccmnc.substr(0, 3)),
        mnc: parseInt(mccmnc.substr(3))
    }
}