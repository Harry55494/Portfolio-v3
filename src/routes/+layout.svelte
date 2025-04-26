<script>
	import '../app.css';
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
	
	let { children } = $props();
</script>

<Navbar/>

{@render children()}

<Footer/>


<style>
    :global(body) {
        background-color: #fdfdfd;
        overflow-x: hidden;
    }
</style>