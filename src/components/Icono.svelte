<script>
    import { onMount } from 'svelte';

    export let style = ''
    export let forma = 'mdiKeyVariant'
    export let color = '#333'

    let d = null
    let e = ''

    onMount(async () => {
        try {
            d = await new Promise ((resolve, reject) => {
                import("@mdi/js")
                .then(foo => {
                    resolve(foo[forma])
                })
                .catch(error => reject(error))
            })
        }
        catch (error) {
            e = error
        }
	});
</script>

{#if e}
    <span style="color: red">e</span>
{:else if d}
    <svg {style} xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
        width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" draggable="false">
        <path {d} fill={color}/>
    </svg>
{/if}

<style>
    svg {
        animation: aparecer .3s ease;
    }

    @keyframes aparecer {
        from {
            opacity: 0;
            transform: scale(.5,.5);
        }
    }
</style>