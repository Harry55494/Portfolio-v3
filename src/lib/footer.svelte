
<script>
    import { LockOutline, MoonOutline, SunOutline } from "flowbite-svelte-icons";
    import { onMount } from "svelte";
    import { version_number } from "$lib/version_number.js";

    import { changeTheme, initialSetTheme } from "./theme_functions";

    onMount(() => {
        initialSetTheme();
    });
</script>

<div class="flex flex-col justify-center items-center content-center align-middle left-0 bottom-1 right-0 p-8 sm:mb-5 mb-2 align-content-center select-none sm:text-[13px] text-[12px]">
    <div class="flex">
        <a href="https://github.com/Harry55494/portfolio-v3" target="_blank" class="flex items-center dark:text-gray-50">
            <img src="https://cdn.simpleicons.org/git" alt="git_logo" class="h-5 w-auto mr-2 m-auto">
            Source (v{version_number})
        </a>
        <button class="hidden sm:flex flex-row" on:click={changeTheme} style="cursor: pointer; ">
            <MoonOutline id="moon_icon" class="h-4 w-auto m-auto ml-4 hidden dark:text-gray-50" />
            <SunOutline id="sun_icon" class="h-4 w-auto m-auto ml-4 hidden dark:text-gray-50" />
        </button>


    </div>
    <div class="flex flex-col justify-center items-center content-center align-middle ">
        <p class="mt-2 dark:text-gray-50">© {new Date().getFullYear()} Harrison Phillingham</p>
        <div class="flex items-center mt-2">
            <LockOutline class="h-4 w-auto dark:text-gray-50" />
            <a href="/openpgp" class="ml-1 dark:text-gray-50">OpenPGP Key</a>
        </div>
    </div>

</div>
