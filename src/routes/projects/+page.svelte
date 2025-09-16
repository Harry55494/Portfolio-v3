
<script>

    import {ArrowUpRightFromSquareOutline} from "flowbite-svelte-icons";

    var projects = {
        pyCatan: {
            name: 'pyCatan',
            description: 'A Python GUI implementation of the board game Catan. Continuation of Conquerors of Catan project.',
            image: 'pyCatan_logo.png',
            link: '/projects/pycatan'
        },
        conquerorsOfCatan: {
            name: 'Conquerors of Catan',
            description: 'Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.',
            image: 'python-logo.png',
            link: '/projects/conquerors-of-catan'
        },
        hikers_challenge: {
            name: 'Hikers Challenge',
            description: 'Climb mountains and earn badges! A demo Android App created as part of an MSc Course.',
            image: 'hikers_challenge_icon.png',
            link: 'https://github.com/Harry55494/Hikers-Challenge'
        },
        portfolioV3: {
            name: 'Portfolio V3',
            description: 'Third version of a Portfolio, aiming for a simple markdown-inspired theme. Built using SvelteKit and Tailwind.',
            image: 'portfolio_v3_logo.png',
            link: 'https://github.com/Harry55494/portfolio-v3'
        },
        portfolioV2: {
            name: 'Portfolio V2',
            description: 'Portfolio V2, built while at University using Svelte. Single page application.',
            image: 'svelte-logo.png',
            link: 'https://github.com/Harry55494/portfolio-v2'
        }
    }

    const projectsArray = Object.values(projects);

</script>


<div class="m-auto">
    <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">Projects</h1>

    <ul class="ml-1">
        {#each projectsArray as project}
            <li class="sm:mb-7 mb-5">
                <div class="flex gap-4 items-start ">
                    <img src={project.image} alt={project.name} class="mt-1 h-auto sm:w-[80px] w-[60px] object-cover rounded-[6px]">
                    <div class="flex flex-col">
                        <a href={project.link} class="text-blue-500 hover:underline sm:text-[18px] text-[16px] sm:mb-0 mb-0 sm:mt-0 flex content-center">{project.name} {#if project.link.includes('https')} <ArrowUpRightFromSquareOutline class="w-4 h-auto ml-2" />{/if}</a>
                        <p class="text-gray-600 sm:text-base text-[13px] dark:text-gray-100">{project.description}</p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

</div>
