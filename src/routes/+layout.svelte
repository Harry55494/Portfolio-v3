<script>
	import '../app.css';
    import Navbar from '$lib/navbar.svelte';
    import Footer from '$lib/footer.svelte';

	let { children } = $props();
</script>


<div class="max-w-[90vw] min-h-[78vh] sm:min-h-[91vh] sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[50vw] xl:max-w-[40vw]  mx-auto">

    <Navbar/>

    <main class="flex-1">
        {@render children()}
    </main>

</div>


<Footer/>


<style>
    :global(body) {
        background-color: #fdfdfd;
        overflow-x: hidden;
    }
</style>
