import "../public/fonts/fontawesome-free-5/css/all.css"

function GlobalStyle() {
	return (
		<style global jsx>
			{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					list-style: none;
				}
				html {
					scroll-behavior: smooth;
				}

				body {
					font-family: "Open Sans", sans-serif;
					background-color: #32314d;
				}

				img {
					width: 100px;
					mix-blend-mode: hard-light;
					margin: 1rem 0;
				}
				@media screen and (max-width: 768px) {
					#__next {
						overflow-x: hidden;
					}
				}
			`}
		</style>
	)
}

export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	)
}
