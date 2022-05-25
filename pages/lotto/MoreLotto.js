import { Box } from "@skynexui/components"
export default function MoreLotto() {
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
					justifyContent: "center",
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
