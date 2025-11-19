<script>
    const external_links = [
        { title: "GitHub", ref: "https://github.com/harry55494/pyCatan" },
    ];
</script>
<div>
    <h1 class="text-3xl font-bold mt-5 mb-5 dark:text-gray-50">pyCatan</h1>
</div>

<ul class="flex flex-col gap-1 list-disc list-inside dark:text-gray-50">
    {#each external_links as link}
        <li><a class="underline text-blue-500 " href={link.ref}>{link.title}</a></li>
    {/each}
</ul>

<hr class="w-[60%] sm:w-[50%] mt-4 mb-4 border-gray-500">

<p class="mt-2 ml-0.5">pyCatan is the continuation of the Conquerors of Catan Project, aimed at integrating a true GUI to the core AI part of the program. The main limitation of Conquerors of Catan was that it only ever had a CLI Interface, which for a complex board game is never ideal. This aims to create a new UI to play with.</p>

<div class="mt-8"></div>

<p class="mt-2 ml-0.5">Current progress can be viewed at the GitHub link above.</p>
