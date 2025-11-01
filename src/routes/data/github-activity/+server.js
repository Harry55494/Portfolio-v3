import {GITHUB_API_TOKEN} from "$env/static/private";
import {Octokit} from "octokit";
import {json} from '@sveltejs/kit';

export async function GET() {
    const octokit = new Octokit({
        auth: GITHUB_API_TOKEN
    });

    const response = await octokit.request('GET /users/{username}/events/public', {
        username: 'harry55494',
        per_page: 10,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github+json'
        },
    });

    return json({
        repos: response.data
    });
}
