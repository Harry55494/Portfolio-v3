<script>
    import {onMount} from "svelte";
    import {checkAndFetchData} from "$lib/data_functions.js"

    let quick_links = [
        { name: "About", href: "/about"},
        { name: "Homelab", href: "/about#homelab" },
        { name: "Conquerors of Catan", href: "/projects/conquerors-of-catan", title: "" },
    ];

    async function prefetchData(){
        await checkAndFetchData("REPO_DATA_CACHE", "/data/github-repos")
        await checkAndFetchData("ACTIVIY_DATA_CACHE", "/data/github-activity")
    }

    onMount(async () => {

        const already_visited = localStorage.getItem("ALREADY_VISITED");

        if (!already_visited) {
            quick_links[0].title = "<-- Start Here"
            localStorage.setItem("ALREADY_VISITED", true)
        }

        await prefetchData()
    })

</script>

<div class="flex justify-center">
    <img src="header-image-original.jpg" alt="header" class="sm:mt-8 mt-10 h-auto w-full object-cover">
</div>

<div class="sm:flex sm:justify-between text-gray-700"><p class=" dark:text-gray-100 mt-3">📍Beddgelert, Wales - August 2022</p> <p class=" sm:mt-3 mt-1 dark:text-gray-100">📷 Canon EOS RP 24-105mm</p> </div>

<h3 class="text-2xl font-bold mt-8 sm:mt-12 mb-4 dark:text-gray-50">Quick Links</h3>

<ul class="flex flex-col gap-1 list-disc list-inside justify-between dark:text-gray-100">
    {#each quick_links as link}
        <li><a class="underline text-blue-500 " href={link.href}>{link.name} </a>{#if link.title} &nbsp; {link.title}{/if}</li>
    {/each}
</ul>
