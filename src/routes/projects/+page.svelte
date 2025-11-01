
<script>
    import {
        ArrowDownOutline,
        ArrowUpRightFromSquareOutline,
        CodeOutline,
        EyeOutline,
        RefreshOutline,
        StarOutline
    } from "flowbite-svelte-icons";
    import { onMount } from "svelte";

    const projects_overwrites = {
        pycatan: {
            description:
                "A Python GUI implementation of the board game Catan. Continuation of Conquerors of Catan project.",
            link: "/projects/pycatan",
        },
        conquerors_of_catan: {
            description:
                "Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.",
            link: "/projects/conquerors-of-catan",
        },
        hikers_challenge: {
            description:
                "Climb mountains and earn badges! A demo Android App created as part of an MSc Course.",
        },
        portfolio_v3: {
            description:
                "Third version of a Portfolio, aiming for a simple markdown-inspired theme. Built using SvelteKit and Tailwind.",
        },
        portfolio_v2: {
            description:
                "Portfolio v2, built while at University using Svelte. Single page application.",
            image: "svelte-logo.png",
        },
    };

    let extracted_data = Object.values({});
    const filter_list = [
        "pyCatan",
        "Conquerors-of-Catan",
        "Portfolio-v3",
        "Hikers-Challenge",
        "Portfolio-v2",
    ];

    async function getPublicGitHubRepos() {
        document.getElementById("arrow_icon").classList.remove("hidden");
        document.getElementById("refresh_icon").classList.add("hidden");

        extracted_data = Object.values({});

        const response = await fetch("/data/github-repos", {
            method: "GET",
        });

        const results = await response.json()

        if (response.status !== 200){
            document.getElementById('connection_error').innerText = `${document.getElementById('connection_error').innerText} HTTP Code: ${response.status}`
            document.getElementById('connection_error').classList.remove('hidden');
            return
        }

        console.log(results.repos);

        extracted_data = results.repos
            .filter((repo) => filter_list.includes(repo.name))
            .map((repo) => {
                const overwriteKey = repo.name.toLowerCase().replace(/-/g, "_");
                const overwrite = projects_overwrites[overwriteKey];
                return {
                    name: repo.name.replaceAll("-", " "),
                    description:
                        overwrite?.description || repo.description?.split("[")[0] || "",
                    image:
                        overwrite?.image ||
                        "https://raw.githubusercontent.com/Harry55494/" +
                            repo.name +
                            "/refs/heads/master/icon.png",
                    link: overwrite?.link || repo.html_url,
                    last_updated: repo.pushed_at,
                    stars: repo.stargazers_count,
                };
            })
            .sort((a, b) => {
                const indexA = filter_list.indexOf(a.name.replaceAll(" ", "-"));
                const indexB = filter_list.indexOf(b.name.replaceAll(" ", "-"));
                return indexA - indexB;
            });

        document.getElementById("refresh_icon").classList.remove("hidden");
        document.getElementById("arrow_icon").classList.add("hidden");
    }

    async function getGitHubActivity() {
        const response = await fetch("/data/github-activity", { method: "GET" });

        const results = await response.json();

        console.log(results);
    }

    onMount(() => {
        getPublicGitHubRepos();
        getGitHubActivity();
    });
</script>


<div class="m-auto">
    <div class="flex al">
        <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">Projects</h1>
        <button type="button" class="mt-auto mb-auto ml-2 translate-y-[2.5px] hover:cursor-pointer" on:click={getPublicGitHubRepos}>
            <RefreshOutline id="refresh_icon" class="w-6 dark:text-gray-50 text-gray-600 hidden "></RefreshOutline>
            <ArrowDownOutline id="arrow_icon" class="w-6 dark:text-gray-50 text-gray-600"></ArrowDownOutline>
        </button>

    </div>

    <p class="mb-5 text-gray-900 sm:text-base text-[14px] ">Projects and Recent Activity listed here are pulled live from my public <a href="https://github.com/harry55494" class="underline">GitHub profile</a> via GitHub's API.</p>

    <hr class="w-full m-auto dark:text-gray-100 mb-5" />

    <p id='connection_error' class="hidden">Connection Error - Please try again later.</p>


    <ul class="ml-1">
        {#each extracted_data as project}
            <li class="sm:mb-7 mb-5">
                <div class="flex gap-4 items-start w-full">
                    {#if project.image === 'git-default'}
                        <div class="h-auto sm:w-[80px] w-[60px] ">
                            <CodeOutline class="m-auto h-auto sm:w-[70px] w-[40px] border-2 border-gray-500 rounded-xl"></CodeOutline>
                        </div>
                    {:else}
                        <img src={project.image} alt={project.name} class="mt-1 h-auto sm:w-[80px] w-[60px] object-cover rounded-[6px]">
                    {/if}
                    <div class="flex flex-col w-full">
                        <div class="flex flex-flow justify-between ">
                            <a href={project.link} class="text-blue-500 hover:underline sm:text-[18px] text-[16px] sm:mb-0 mb-0 sm:mt-0 flex content-center">{project.name} {#if project.link.includes('https')} <ArrowUpRightFromSquareOutline class="w-4 h-auto ml-2" />{/if}</a>
                            <div class="sm:mr-5 m-1 flex flex-row items-center">
                                <StarOutline class="w-4 dark:text-gray-50 text-gray-600 sm:mr-1 mr-0.5"></StarOutline>
                                <p class="sm:mr-3 mr-2 text-gray-900 sm:text-base text-[13px] dark:text-gray-100 w-1 text-center">{project.stars}</p>
                                <!--<EyeOutline class="w-4 dark:text-gray-50 text-gray-600 sm:mr-1 mr-0.5"></EyeOutline>
                                <p class="text-gray-900 sm:text-base text-[13px] dark:text-gray-100">{project.watchers}</p>-->
                            </div>

                        </div>

                        <p class="text-gray-900 sm:text-base text-[13px] dark:text-gray-100">{project.description}</p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

</div>
