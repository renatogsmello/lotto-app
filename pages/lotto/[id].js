import { Box } from "@skynexui/components"
import { useRouter } from "next/router"
import useSwr from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Lotto() {
	const router = useRouter()
	const { data, error } = useSwr(router.query.id ? `/api/lotto/${router.query.id}` : null, fetcher)

	if (error) return <div>Failed to load lotto</div>
	if (!data) return <div>Loading...</div>

	return (
		<>
			<Box
				styleSheet={{
					borderRadius: ".5rem",
					backgroundColor: data.theme,
					padding: "1.5rem",
					textAlign: "center",
					margin: "1.5rem",
				}}
			>
				<h3>{data.lotteryName}</h3>
				<picture>
					<source srcSet={`/public/images/${data.lotteryLogo}`} type="image/svg+xml" />
					<img src={`/public/images/${data.lotteryLogo}`} alt="Lotto Logo" />
				</picture>
				<h1>
					<strong>&euro;</strong>
					{data.jackpotPrice}
				</h1>
				<p>
					<i className="fas fa-clock"></i>
					{data.drawTime}
				</p>
				<button type="button">
					<i className="fas fa-play"></i>
					Play
				</button>
			</Box>
		</>
	)
}
