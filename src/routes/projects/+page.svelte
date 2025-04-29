
<script>
    var projects = {
        pyCatan: {
            name: 'pyCatan',
            description: 'A Python implementation of the board game Catan.',
            image: 'pyCatan_logo.png',
            link: '/pycatan'
        },
        conquerorsOfCatan: {
            name: 'Conquerors of Catan',
            description: 'Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.',
            image: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
            link: 'https://github.com/Harry55494/Conquerors-of-Catan'
        },
        portfolioV3: {
            name: 'Portfolio V3',
            description: 'Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.',
            image: 'portfolio_v3_logo.png',
            link: 'https://github.com/Harry55494/portfolio-v3'
        },
        portfolioV2: {
            name: 'Portfolio V2',
            description: 'Third Year Degree Solo Project, using the MiniMax algorithm to play The Settlers of Catan.',
            image: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
            link: 'https://github.com/Harry55494/portfolio-v2'
        }
    }

    const projectsArray = Object.values(projects);

</script>


<div class="w-[90vw] sm:w-[40vw] m-auto">
    <h1 class="text-3xl font-bold mt-4 mb-5">Projects</h1>



    <ul class="ml-1">
        {#each projectsArray as project}
            <li class="sm:mb-2 mb-4">
                <div class="flex items-center gap-4 items-start ">
                    <img src={project.image} alt={project.name} class="sm:mt-4 mt-2 h-auto sm:w-[80px] w-[60px] object-cover rounded">
                    <div class="flex flex-col mt-auto mb-auto">
                        <a href={project.link} class="text-blue-500 hover:underline sm:text-[18px] text-[16px] sm:mb-0 mb-1">{project.name}</a>
                        <p class="text-gray-600 sm:text-base text-[13px]">{project.description}</p>
                    </div>
                </div>
            </li>
        {/each}
    </ul>

</div>