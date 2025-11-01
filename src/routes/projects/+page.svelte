
<script>

    import {ArrowUpRightFromSquareOutline, RefreshOutline, ArrowDownOutline, GithubSolid, CodeOutline} from "flowbite-svelte-icons";
    import {onMount} from "svelte";

    var projects_overwrites = {
        pycatan: {
            description: 'A Python GUI implementation of the board game Catan. Continuation of Conquerors of Catan project.',
            link: '/projects/pycatan'
        },
        conquerors_of_catan: {
            description: 'Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.',
            link: '/projects/conquerors-of-catan'
        },
        hikers_challenge: {
            description: 'Climb mountains and earn badges! A demo Android App created as part of an MSc Course.',
        },
        portfolio_v3: {
            description: 'Third version of a Portfolio, aiming for a simple markdown-inspired theme. Built using SvelteKit and Tailwind.',
        },
        portfolio_v2: {
            description: 'Portfolio v2, built while at University using Svelte. Single page application.',
            image: 'svelte-logo.png',
        }
    }

    let extracted_data = Object.values({});
    const filter_and_sort_list = ["pyCatan", "Conquerors-of-Catan", "Portfolio-v3", "Hikers-Challenge", "Portfolio-v2"]

    async function getPublicGitHubRepos() {
        document.getElementById('arrow_icon').classList.remove('hidden')
        document.getElementById('refresh_icon').classList.add('hidden')

        extracted_data = Object.values({})

        const response = await fetch('/data/github-repos', {
            method: 'GET',
        });

        const results = await response.json()

        console.log(results.repos)

        extracted_data = results.repos.filter(repo => filter_and_sort_list.includes(repo.name)).map(repo => {
            const overwriteKey = repo.name.toLowerCase().replace(/-/g, '_');
            const overwrite = projects_overwrites[overwriteKey];
            return {
                name: repo.name.replaceAll('-', ' '),
                description: overwrite?.description || repo.description?.split('[')[0] || '',
                image: overwrite?.image || "https://raw.githubusercontent.com/Harry55494/" + repo.name + "/refs/heads/master/icon.png",
                link: overwrite?.link || repo.html_url
            };

        }).sort((a, b) => {
            const indexA = filter_and_sort_list.indexOf(a.name.replaceAll(' ', '-'));
            const indexB = filter_and_sort_list.indexOf(b.name.replaceAll(' ', '-'));
            return indexA - indexB;
        })


        document.getElementById('refresh_icon').classList.remove('hidden')
        document.getElementById('arrow_icon').classList.add('hidden')
    }

    async function getGitHubActivity(){
        const response = await fetch('/data/github-activity',
            {method: 'GET',
            });

        const results = await response.json()

        console.log(results)
    }

    onMount(() => {
        getPublicGitHubRepos()
        getGitHubActivity()
    })





</script>


<div class="m-auto">
    <div class="flex al">
        <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">Projects</h1>
        <button type="button" class="mt-auto mb-auto ml-2 translate-y-[2.5px] hover:cursor-pointer" on:click={getPublicGitHubRepos}>
            <RefreshOutline id="refresh_icon" class="w-6 dark:text-gray-50 text-gray-600 hidden "></RefreshOutline>
            <ArrowDownOutline id="arrow_icon" class="w-6 dark:text-gray-50 text-gray-600"></ArrowDownOutline>
        </button>

    </div>

    <p class="mb-5 text-gray-900 sm:text-base text-[14px] ">Projects listed here are pulled live from my public <a href="https://github.com/harry55494" class="underline">GitHub profile</a> via <a href="https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28&versionId=free-pro-team%40latest&restPage=scripting-with-the-rest-api-and-javascript#list-repositories-for-a-user" class="underline">GitHub's API.</a> </p>

    <hr class="w-full m-auto dark:text-gray-100 mb-5" />




    <ul class="ml-1">
        {#each extracted_data as project}
            <li class="sm:mb-7 mb-5">
                <div class="flex gap-4 items-start ">
                    {#if project.image === 'git-default'}
                        <div class="h-auto sm:w-[80px] w-[60px] ">
                            <CodeOutline class="m-auto h-auto sm:w-[70px] w-[40px] border-2 border-gray-500 rounded-xl"></CodeOutline>
                        </div>
                    {:else}
                        <img src={project.image} alt={project.name} class="mt-1 h-auto sm:w-[80px] w-[60px] object-cover rounded-[6px]">
                    {/if}
                    <div class="flex flex-col">
                        <a href={project.link} class="text-blue-500 hover:underline sm:text-[18px] text-[16px] sm:mb-0 mb-0 sm:mt-0 flex content-center">{project.name} {#if project.link.includes('https')} <ArrowUpRightFromSquareOutline class="w-4 h-auto ml-2" />{/if}</a>
                        <p class="text-gray-900 sm:text-base text-[13px] dark:text-gray-100">{project.description}</p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

</div>
