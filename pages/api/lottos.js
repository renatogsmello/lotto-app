const lottos = [
	{
		id: "1",
		lotteryName: "Mega Sena",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "300.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#dc2626",
	},
	{
		id: "2",
		lotteryName: "Mega da Virada",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "690.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#c026d3",
	},
	{
		id: "3",
		lotteryName: "Mega Sena",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "240.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#7c3aed",
	},
	{
		id: "4",
		lotteryName: "Mega da Virada",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "1.300.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#65a30d",
	},
	{
		id: "5",
		lotteryName: "Mega Sena",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "800.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#2563eb",
	},
	{
		id: "6",
		lotteryName: "Mega da Virada",
		lotteryLogo: "lotto_logo.png",
		jackpotPrice: "100.000",
		drawTime: "1 day 15 hours 5 minutes",
		theme: "#0891b2",
	},
]

export default function handler(req, res) {
	//Get data from database
	res.status(200).json(lottos)
}
