<script>
	import '../app.css';
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';
	
	let { children } = $props();
</script>


<div class="max-w-[90vw] sm:max-w-[40vw] mx-auto">

    <Navbar/>

    {@render children()}

    <Footer/>

</div>


<style>
    :global(body) {
        background-color: #fdfdfd;
        overflow-x: hidden;
    }
</style>