export default function lottoHandler(req, res) {
	const {
		query: { id, lotteryName, lotteryLogo, jackpotPrice, drawTime, theme },
		method,
	} = req

	switch (method) {
		case "GET":
			//Get data from database
			res.status(200).json({ id, lotteryName, lotteryLogo, jackpotPrice, drawTime, theme })
			console.log(res)
			break
		case "PUT":
			res.status(200).json({ id, lotteryName, lotteryLogo, jackpotPrice, drawTime, theme })
			break
		default:
			res.setHeader("Allow", ["GET", "PUT"])
			res.status(405).end(`Method ${method} Not Allowed`)
	}
}
