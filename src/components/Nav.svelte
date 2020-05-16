<script>
	import Icono from '../components/Icono.svelte'
	export let segment;
	export let usuario = null
</script>

<nav>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Inicio</a></li>
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='explorar'>Explorar</a></li>
		<li><a aria-current='{segment === "contacto" ? "page" : undefined}' href='contacto'>Contacto</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		{#if usuario}
		<li>
		<button>
            <Icono style="width: 30px; height: 30px" forma="mdiHomePlus"/>
        </button>
		</li>
		<li><a href="usuario">{usuario}</a></li>
		{/if}
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		margin: auto 0;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: #0099ff;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	button {
		border-radius: 50%;
		background-color: transparent;
		border: 1px solid transparent;
		display: flex;
		padding: .5em;
		margin: auto;
		cursor: pointer;
	}
</style>
