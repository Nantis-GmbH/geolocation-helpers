export const cellIdentifier = ({ mccmnc, lac, cellId } : { mccmnc: number, lac: number, cellId: number }) => `${mccmnc}-${lac}-${cellId}`