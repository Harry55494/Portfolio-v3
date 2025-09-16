<script>
    const quick_links = [
        { name: 'About', href: '/about' },
        { name: 'Homelab', href: '/about#homelab' },
        { name: 'PyCatan', href: '/projects/pycatan', description: '' }
    ];
</script>

<div class="flex justify-center">
    <img src="header-image-full.png" alt="header" class="sm:mt-8 mt-10 h-auto w-full object-cover">
</div>

<div class="sm:flex sm:justify-between"><p class="text-gray-600 dark:text-gray-100 mt-3">📍Beddgelert, Wales - August 2022</p> <p class="text-gray-600 sm:mt-3 mt-1 dark:text-gray-100">📷 Canon EOS RP 24-105mm + Filter</p> </div>

<h3 class="text-2xl font-bold mt-8 sm:mt-12 mb-4 dark:text-gray-50">Quick Links</h3>

<ul class="flex flex-col gap-1 list-disc list-inside justify-between dark:text-gray-100">
    {#each quick_links as link}
        <li><a class="underline text-blue-500 " href={link.href}>{link.name} </a>{#if link.description} &nbsp;- {link.description}{/if}</li>
    {/each}
</ul>
