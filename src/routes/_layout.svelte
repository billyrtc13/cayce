<script>
	import Nav from '../components/Nav.svelte';

	const version = process.env.version
</script>

<header>
	<h1><img src="./logo.jpeg" alt="CAYCE"></h1>
	<Nav/>
</header>

<slot></slot>

<footer>
	<div>
		<!-- <img src="" alt="imagenFooter"> -->
	</div>
	<span>Desarrollado por</span>
	<a href="https://billy.com.uy" target="_blanc">billyrtc13@gmail.com</a>
	<span>v {version}</span>
</footer>

<style>
	h1 {
		text-align: center;
		margin: 0 auto;
		text-transform: uppercase;
		font-weight: 300;
		display: flex;
		font-size: 1em;
		padding: .5em;
		justify-content: center;
		color: #555;
	}

	img {
		height: 100px;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	footer {
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: #444;
		padding: 2em;
		box-sizing: border-box;
		margin-top: auto;
	}

	footer div {
		max-width: 150px;
		margin: 1em auto;
	}

	span, a {
		text-decoration: none;
		color: #fff;
		margin: .3em auto;
		text-align: center;
	}
</style>