<script>
    import {onMount} from "svelte";

    const external_links = [
        { title: "GitHub", ref: "https://github.com/harry55494/conquerors-of-catan" },
    ];

    async function getEmail(){
        const response = await fetch("/data/email", { method: "GET" });
        return await response.json()
    }

    onMount(async () => {
        const data = await getEmail();
    })

</script>
<div>
    <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">Conquerors of Catan</h1>
</div>

<ul class="flex flex-col gap-1 list-disc list-inside dark:text-gray-50">
    {#each external_links as link}
        <li><a class="underline text-blue-500 " href={link.ref}>{link.title}</a></li>
    {/each}
</ul>

<hr class="w-[60%] sm:w-[50%] mt-4 mb-4 border-gray-500">

<p class="mt-2 ml-0.5">Conquerors of Catan was a degree 'capstone' project, aimed at creating an AI player for the classic euro-style board game The Settlers of Catan (aka Catan). The challenge comes from Catan having imperfect information (private cards), random chance (dice roles and card draws), and player interaction (trading).</p>
<p class="mt-2 ml-0.5">Conquerors of Catan comes up with innovative methods to deal with these challenge, resulting in a strong Human-competitive player.</p>

<div class="mt-8"></div>

<p class="mt-2 ml-0.5">In time, the project summary will be written here, however if you wish to read the final paper, you can request it via <a class="underline " href=""> email</a>. The code is also available at GitHub as above.</p>
