<script>
	import Nav from '../components/Nav.svelte';

	const version = process.env.version
</script>

<header>
	<h1><img src="./logo.jpeg" alt="CAYCE"></h1>
</header>

<article class="content">
	<Nav/>
	<slot></slot>

	<footer>
		<div>
			<!-- <img src="" alt="imagenFooter"> -->
		</div>
		<span>Desarrollado por</span>
		<a href="https://billy.com.uy" target="_blanc">billyrtc13@gmail.com</a>
		<span>v {version}</span>
	</footer>
</article>

<style>
	header {
		position: fixed;
		z-index: 1;
		width: 100%;
		top: 0;
		left: 0;
	}

	h1 {
		text-align: center;
		margin: 1em auto;
		text-transform: uppercase;
		font-weight: 300;
		display: flex;
		font-size: 1em;
		padding: .5em;
		justify-content: center;
		color: #555;
	}

	img {
		height: 80px;
		max-width: 80%;
		object-fit: contain;
		object-position: center;
	}

	.content {
		position: absolute;
		z-index: 3;
		left: 0;
		top: 100px;
		width: 100%;
		grid-row: 2;
		background-color: #fff;
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

	@media (min-width: 480px) {
		h1 {
			margin: .5em 0;
		}

		img {
			height: 100px;
		}

		.content {
			top: 130px;
		}
	}
</style>