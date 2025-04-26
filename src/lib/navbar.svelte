<script>
    const links = [
        { name: 'About', href: '/' },
        { name: 'Homelab', href: '/homelab' },
        { name: 'Projects', href: '/projects' }
    ];
</script>


<div class="flex justify-left align-middle left-0 top-0 right-0 m-auto align-content-center w-[40vw] h-16 ">

    <a href="/" class="w-[500px] mt-auto mb-auto font-bold ">Harrison Phillingham</a>

    <div class="w-full"></div>

    {#each links as link}
        <a href={link.href} class="mt-auto mb-auto mr-6 hover:text-shadow-hover hover:underline">
            {link.name}
        </a>
    {/each}


</div>

<hr class="w-[40vw] m-auto">