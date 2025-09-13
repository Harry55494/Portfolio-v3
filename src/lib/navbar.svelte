<script>
    const links = [
        { name: 'About', href: '/about' },
        { name: 'Homelab', href: '/homelab' },
        { name: 'Projects', href: '/projects' }
    ];
</script>


<div class="flex justify-left align-middle left-0 top-0 right-0 m-auto align-content-center w-full h-16 select-none">

    <a href="/" class="mt-auto mb-auto w-[100vw]"><p class="font-bold">Harrison Phillingham</p></a>

    <div class="w-full"></div>

    {#each links as link}
        <a href={link.href} class="mt-auto mb-auto sm:mr-6 mr-4 hover:text-cyan-500 transition-colors duration-200">{link.name}</a>
    {/each}


</div>

<hr class="w-full m-auto">
