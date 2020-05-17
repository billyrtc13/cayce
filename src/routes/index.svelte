<svelte:head>
	<title>CAYCE</title>
</svelte:head>

<script>
	import Icono from '../components/Icono.svelte'
	let mensaje = 'CAYCE'
</script>

<section class="pre">
	<div>
		<h2>PRÉSTAMOS EN EFECTIVO</h2>
	</div>
</section>

<section class="req">
	<h2>Requisitos de préstamo</h2>
	<div>
		<Icono forma="mdiTextBoxMultipleOutline" style="width:60px;height:60px;margin: auto" color="#fff"/>
		<span>2 últimos recibos de sueldo</span>
	</div>
	<div>
		<Icono forma="mdiTextBoxSearchOutline" style="width:60px;height:60px;margin: auto" color="#fff"/>
		<span>Disponible en recibo</span>
	</div>
	<div>
		<Icono forma="mdiCardAccountDetailsOutline" style="width:60px;height:60px;margin: auto" color="#fff"/>
		<span>Cédula de identidad</span>
	</div>
	<div>
		<Icono forma="mdiFolderHomeOutline" style="width:60px;height:60px;margin: auto" color="#fff"/>
		<span>Constancia de domicilio</span>
	</div>
</section>

<section class="pue">	
	<p>
		Puedes enviarnos la información por WatsApp y lo cabrás en el día en Red Pagos
	</p>
	<hr>
	<a href="https://api.whatsapp.com/send?phone=59894263332" target="_blank" rel="noopener noreferrer">
		<img src="./whatsapp.png" alt="Logo de WhatsApp">
		<span>
			Has clic aquí para enviarnos un WhatsApp
			<br>
			Sr. Jorge Sosa (Cerro Largo)
		</span>
	</a>
	<p>
		Lo cobrás en el día en Red Pagos
	</p>
	<img src="./redPagos.png" alt="Logo de Red Pagos" class="redpagos">
</section>


<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.pre {
		background-color: #aed1be;
		background-image: url('../1000pesos.jpg');
		background-attachment: fixed;
	}

	.pre div {
		background-image: url('../2000pesosVertical.png');
		background-attachment: fixed;
		background-repeat: repeat-y;
		background-position-x: 100%;
		animation: subritira 20s linear infinite;
	}

	@keyframes subritira {
		from { background-position-y: -569px }
		50% { background-position-y: 0 }
		to  { background-position-y: 0 }
	}

	.req {
		width: 100%;
		max-width: 900px;
		margin: 2em auto;
		padding: 2em;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2em;
	}

	.req h2 {
		width: 100%;
		grid-column: 1 /span 4;
		display: flex;
		padding: 1em;
		justify-content: center;
		text-align: center;
	}

	.req div {
		width: 100%;
		height: 300px;
		border-radius: .7em;
		background-color: red;
		display: grid;
		grid-template-rows: 1fr 1fr;
	}

	.req span {
		color: #fff;
		font-size: 1.5em;
		display: flex;
		justify-content: center;
		text-align: center;
		margin: auto .5em;
		line-height: 1.2em;
	}

	.pue {
		margin: 4em auto;
		width: 90%;
		max-width: 600px;
		background-color: #dee0e7;
		border-radius: 5px;
		display: flex;
		flex-direction: column;
		padding: 2em;
		border-left: 6px solid red;
	}

	.pre h2 {
		padding: 1em;
		margin: 2em 0;
		text-align: center;
		font-size: 4em;
		font-weight: bold;
		color: #fff;
		background-color: #00000055;
		background-attachment: fixed;
	}

	a {
		text-decoration: none;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	a span {
		margin: auto 1em;
	}

	.redpagos {
		margin: 1em auto 1em 0;
		width: 200px;
		max-width: 100%;
	}

	@media (min-width: 900px) {
		h2 {
			padding: 1em;
		}
	}

	@media (max-width: 800px) {
		.req {
			width: 100%;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto 1fr 1fr;
		}

		.req h2 {
			grid-column: 1 /span 2;
		}

		.req div {
			height: 200px;
		}
	}

	@media (max-width: 600px) {
		.pre h2 {
			font-size: 2em;
		}

		div {
			background-size: 50%;
		}
	}

	@media (max-width: 400px) {
		.req {
			grid-gap: 1em;
		}
	}
</style>
