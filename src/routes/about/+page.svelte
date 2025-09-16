<script>
    const chapter_headings = {
        "Work" : "work",
        "Homelab" : "homelab",
        "Tools/Setup" : "tools",
    }
</script>

<div class="m-auto dark:text-gray-50">
    <h1 class="text-3xl font-bold mt-5 mb-4 dark:text-gray-50">About</h1>



    <p>Hey! My name's Harrison and I work in Digital Forensics for Thames Valley Police.</p>

    <p class="mt-2">This website is under construction, but you can find out more about me on <a class="underline hover:text-cyan-500 transition-colors duration-200" href="https://www.linkedin.com/in/harrison-phillingham/">LinkedIn</a>, or see some of my projects on the <a class="underline hover:text-cyan-500 transition-colors duration-200" href="/projects">Projects</a> page.</p>

    <hr class="w-[60%] sm:w-[50%] mt-4 mb-4 border-gray-500">

    <ul class="flex flex-col gap-1 list-disc list-inside">
        {#each Object.entries(chapter_headings) as [heading, id]}
            <li><a class="underline text-blue-500 " href={"#" + id}>{heading}</a></li>
        {/each}
    </ul>

    <hr class="w-[60%] sm:w-[50%] mt-5 mb-4 border-gray-500">

    <h3 id="work" class="text-2xl font-bold mt-6 mb-4">Work</h3>

    <h3 id="homelab" class="text-2xl font-bold mt-6 mb-4">Homelab</h3>

    <h3 id="tools" class="text-2xl font-bold mt-6 mb-4">Tools/Setup</h3>



</div>
