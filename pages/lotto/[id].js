import { Box } from "@skynexui/components"
import { useRouter } from "next/router"
import useSwr from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())
export default function Lotto() {
	const router = useRouter()
	const { data, error } = useSwr(router.query.id ? `/api/lotto/${router.query.id}` : null, fetcher)
	console.log(fetcher)

	if (error) return <div>Failed to load lotto</div>
	console.log(data)
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

export function MoreLotto(props) {
	return (
		<>
			<Box
				styleSheet={{
					borderRadius: ".5rem",
					backgroundImage: "linear-gradient(45deg, #dc2626, #c026d3, #7c3aed, #2563eb, #0891b2, #65a30d)",
					padding: "1.5rem",
					textAlign: "center",
					margin: "1.5rem",
					display: "flex",
					alignItems: "center",
				}}
			>
				<h2>More Jackpots Coming Soon</h2>
			</Box>
			<style jsx>
				{`
					h2 {
						color: #fff;
					}
				`}
			</style>
		</>
	)
}
