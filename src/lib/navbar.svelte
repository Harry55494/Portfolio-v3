<script>
    const links = [
        { name: 'About', href: '/' },
        { name: 'Homelab', href: '/homelab' },
        { name: 'Projects', href: '/projects' }
    ];
</script>


<div class="flex justify-left align-middle left-0 top-0 right-0 m-auto align-content-center sm:h-16 h-24 sm:flex-row flex-col">

    <a href="/" class="sm:w-[500px] w-full sm:mt-auto mt-6 sm:mb-auto mb-2 font-bold text-lg ">Harrison Phillingham</a>

    <div class="w-full"></div>

    <div class="mt-auto sm:mb-auto mb-4">
        {#each links as link}
        <a href={link.href} class="mt-auto mb-auto mr-6 hover:text-shadow-hover hover:underline">
            {link.name}
        </a>
    {/each}
    </div>




</div>

<hr class="sm:mb-2 mb-4">