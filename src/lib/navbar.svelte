<script>
    import {changeTheme} from "$lib/theme_functions.js";
    import {MoonOutline, SunOutline} from "flowbite-svelte-icons";
    import {onMount} from "svelte";

    const links = [
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' }
    ];

    let current_path = '';

    onMount(() => {
        current_path = document.location.pathname.toString().split('/')[1]
    });



</script>


<div class="flex justify-left align-middle left-0 top-0 right-0 m-auto align-content-center w-full h-16 select-none">

    <a href="/" class="mt-auto mb-auto w-[100vw] dark:text-gray-50 font-bold sm:text-lg">Harrison Phillingham</a>

    <div class="w-full"></div>


    {#each links as link}
        <a href={link.href} class="mt-auto mb-auto sm:mr-6 mr-4 hover:text-blue-500 hover:underline transition-all duration-200 dark:text-gray-50">{link.name}</a>
    {/each}


    <button class="sm:hidden flex flex-row" on:click={changeTheme} style="cursor: pointer; ">
        <MoonOutline id="moon_icon" class="h-4 w-auto m-auto hidden dark:text-gray-50" />
        <SunOutline id="sun_icon" class="h-4 w-auto m-auto hidden dark:text-gray-50" />
    </button>


</div>

<hr class="w-full m-auto dark:text-gray-100" />
