import { Box } from "@skynexui/components"
import MoreLotto from "./lotto/MoreLotto"
import useSwr from "swr"
import React from "react"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function HomePage() {
	const [numRows, setNumRows] = React.useState(4)

	const { data, error } = useSwr("/api/lottos", fetcher)
	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	return (
		<>
			<header>
				<h1>Lottos</h1>
			</header>

			<Box styleSheet={{ width: { xs: "300px", sm: "480px", md: "768px", lg: "992px", xl: "1200px" }, margin: "auto" }}>
				<Box as="form" styleSheet={{ display: { xs: "none", sm: "none", md: "none", lg: "none", xl: "block" }, textAlign: "center" }}>
					<label>Number of Rows</label>
					<select
						onChange={function (event) {
							const value = event.target.value
							setNumRows(value)
							console.log(value)
						}}
						defaultValue={numRows}
					>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
						<option value="5">5</option>
					</select>
				</Box>
				<Box
					styleSheet={{
						display: "grid",
						gridTemplateColumns: {
							sx: `repeat(1, 1fr)`,
							sm: `repeat(2, 1fr)`,
							md: `repeat(3, 1fr)`,
							lg: `repeat(4, 1fr)`,
							xl: `repeat(${numRows}, 1fr)`,
						},
						gridAutoRows: "1fr",
					}}
				>
					{data.map((data) => (
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
								<source srcSet={`/images/${data.lotteryLogo}`} type="image/svg+xml" />
								<img src={`/images/${data.lotteryLogo}`} alt="Lotto Logo" />
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
					))}
					<MoreLotto />
				</Box>
			</Box>
			<style jsx>
				{`
					header {
						background-color: #252439;
						padding: 0.75rem;
					}
					h1 {
						color: #fff;
					}
					h3 {
						color: #fff;
					}
					label {
						color: #fff;
					}
					select {
						margin: 15px;
						width: 20px;
						padding: 5px 5px 5px 5px;
						font-size: 18px;
						color: #fff;
						font-family: "Opens Sans", Sans-serif;
						border-top: none;
						border-right: none;
						border-bottom: 1px solid #fff;
						border-left: none;
						height: 34px;
						-webkit-appearance: none;
						-moz-appearance: none;
						appearance: none;
						background: none;
					}
					p {
						color: #fff;
						margin: 1.5rem 0;
					}
					i {
						margin-right: 0.5rem;
					}
					button {
						padding: 10px 18px;
						border: none;
						border-radius: 0.25rem;
						background-color: rgba(255, 255, 255, 0.15);
						color: #fff;
						font-size: 18px;
					}
					button:hover {
						cursor: pointer;
					}
				`}
			</style>
		</>
	)
}
