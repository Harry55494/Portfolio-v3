
<script>
    import {
        ArrowDownOutline,
        ArrowRightOutline,
        ArrowUpRightFromSquareOutline,
        CodeBranchOutline,
        CodeOutline,
        EyeOutline,
        RefreshOutline,
        StarOutline
    } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import {cacheData, checkAndFetchData } from "$lib/data_functions.js";

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

    let extracted_repo_data = Object.values({});
    let extracted_activity_data = Object.values({});
    const filter_list = [
        "pyCatan",
        "Conquerors-of-Catan",
        "Portfolio-v3",
        "Hikers-Challenge",
        "Portfolio-v2",
    ];



    async function getPublicGitHubRepos() {
        document.getElementById("arrow_icon_projects").classList.remove("hidden");
        document.getElementById("refresh_icon_projects").classList.add("hidden");

        extracted_repo_data = Object.values({});

        const data = await checkAndFetchData("REPO_DATA_CACHE", "/data/github-repos")

        extracted_repo_data = data.repos
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

        await new Promise((resolve) => {
            setTimeout(resolve, 150);
        });

        document.getElementById("refresh_icon_projects").classList.remove("hidden");
        document.getElementById("arrow_icon_projects").classList.add("hidden");
    }

    async function getGitHubActivity() {

        document.getElementById("arrow_icon_activity").classList.remove("hidden");
        document.getElementById("refresh_icon_activity").classList.add("hidden");

        extracted_activity_data = Object.values({});

        const data = await checkAndFetchData("ACTIVIY_DATA_CACHE", "/data/github-activity")

        console.log(data)

        const date_object = new Date()
        const month = String(date_object.getMonth() + 1).padStart(2, "0");
        const date = String(date_object.getDate()).padStart(2, "0");
        const compare_date = `${date_object.getFullYear()}-${month}-${date}`

        extracted_activity_data = data.repos.map((repo) => {

            const icon = (() => {
                switch (repo.type) {
                    case 'PushEvent': return ArrowRightOutline;
                    case 'CreateEvent': return CodeBranchOutline;
                    case 'WatchEvent': return EyeOutline
                    case 'PullRequestEvent': return CodeBranchOutline
                    default: return CodeBranchOutline;
                }

            })();

            const display_time = (() => {
                if (repo.created_at.split('T')[0] === compare_date) {
                    return repo.created_at.split('T')[1].replace('Z', '').split(":").slice(0, 2).join(":")
                } else  {
                    return repo.created_at.split('T')[0].split('-').reverse().join('/')
                }
            })();

            const repo_name = repo.repo.name.replace('Harry55494/', '')

            const description = (() => {
                switch (repo.type) {
                    case 'PushEvent': return `Pushed to ${repo_name}`
                    case 'WatchEvent': return `Watched ${repo_name}`
                    case 'CreateEvent': return `Created Branch '${repo.payload.ref}' in ${repo_name}`
                    case 'PullRequestEvent': return `Created Pull Request #${repo.payload.number} in ${repo_name}`
                    default: return "An Event Happened"
                }
            })();

            return {
                event: repo.type.replace('Event', ''),
                sort_time: repo.created_at,
                display_time,
                repository: repo_name,
                description,
                icon

            };
        }).sort((a, b) => new Date(b.sort_time) - new Date(a.sort_time))

        await new Promise((resolve) => {
            setTimeout(resolve, 150);
        });

        document.getElementById("refresh_icon_activity").classList.remove("hidden");
        document.getElementById("arrow_icon_activity").classList.add("hidden");
    }

    onMount(() => {
        getPublicGitHubRepos();
        getGitHubActivity();
    });

</script>


<div class="m-auto dark:text-gray-50">
    <div class="flex">
        <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">Projects</h1>
        <button type="button" class="mt-auto mb-auto ml-2 translate-y-[2.5px] hover:cursor-pointer" on:click={getPublicGitHubRepos}>
            <RefreshOutline id="refresh_icon_projects" class="w-6 dark:text-gray-50 text-gray-600 hidden "></RefreshOutline>
            <ArrowDownOutline id="arrow_icon_projects" class="w-6 dark:text-gray-50 text-gray-600"></ArrowDownOutline>
        </button>

    </div>

    <p class="mb-5 ml-0.5 text-gray-900 sm:text-base text-[14px] dark:text-gray-50">Projects and Recent Activity listed here are pulled live from my public <a href="https://github.com/harry55494" class="underline">GitHub profile</a> via GitHub's API. Data is cached for 5 minutes. </p>

    <hr class="w-full m-auto dark:text-gray-100 mb-5" />

    <p id='connection_error' class="hidden">Connection Error - Please try again later.</p>


    <ul class="ml-1">
        {#each extracted_repo_data as project}
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
                            <a href={project.link} class="text-blue-500 hover:underline sm:text-[18px] text-[16px] sm:mb-0 mb-0 sm:mt-0 flex content-center">{project.name} {#if project.link.includes('https')} <ArrowUpRightFromSquareOutline class="w-4 h-auto ml-2" />{:else}{/if}</a>
                            <div class="sm:mr-5 m-1 flex flex-row items-center">
                                <StarOutline class="w-4 dark:text-gray-50 text-gray-600 sm:mr-1 mr-0.5"></StarOutline>
                                <p class="sm:mr-3 mr-2 text-gray-900 sm:text-base text-[13px] dark:text-gray-100 w-1 text-center">{project.stars}</p>
                                <!--<EyeOutline class="w-4 dark:text-gray-50 text-gray-600 sm:mr-1 mr-0.5"></EyeOutline>
                                <p class="text-gray-900 sm:text-base text-[13px] dark:text-gray-100">{project.watchers}</p>-->
                            </div>

                        </div>

                        <p class="text-gray-900 sm:text-base text-[14px] dark:text-gray-100">{project.description}</p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

    <hr class="w-full m-auto dark:text-gray-100 mb-5" />

    <div class="flex">
        <h1 class="text-3xl font-bold mt-5 mb-7 dark:text-gray-50">Recent Activity</h1>
        <button type="button" class="mt-auto mb-auto ml-2 hover:cursor-pointer" on:click={getGitHubActivity()}>
            <RefreshOutline id="refresh_icon_activity" class="w-6 dark:text-gray-50 text-gray-600 hidden "></RefreshOutline>
            <ArrowDownOutline id="arrow_icon_activity" class="w-6 dark:text-gray-50 text-gray-600"></ArrowDownOutline>
        </button>

    </div>

    <ul class="ml-1 mb-5 sm:mb-12">
        {#each extracted_activity_data as activity}
            <li class="sm:mb-5 mb-2">
                <div class="flex gap-2 items-start w-full">
                    <svelte:component this={activity.icon} class="sm:w-8 w-6 h-auto dark:text-gray-50 text-gray-900 "/>
                    <div class="flex flex-col w-full">
                        <div class="flex flex-flow justify-between ">
                            <p class="text-gray-900 sm:text-base text-[13px] dark:text-gray-100 w-[3/4]">{activity.description}</p>
                            <div class="sm:mr-5 m-1 flex flex-row items-center">
                                <p class="sm:mr-3 mr-2 text-gray-900 sm:text-base text-[14px] dark:text-gray-100 ">{activity.display_time}</p>
                            </div>
                        </div>

                    </div>

                </div>

            </li>
        {/each}
    </ul>

</div>
