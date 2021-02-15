export const cellIdentifier = ({
	mccmnc,
	lac,
	cellId,
}: {
	mccmnc: number
	lac: number
	cellId: number
}): string => `${mccmnc}-${lac}-${cellId}`
