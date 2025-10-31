import {GITHUB_API_TOKEN} from "$env/static/private";
import {Octokit} from "octokit";
import {json} from '@sveltejs/kit';

export async function GET() {
    const octokit = new Octokit({
        auth: GITHUB_API_TOKEN
    });

    const response = await octokit.request('GET /users/{username}/repos', {
        username: 'harry55494',
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    return json({
        repos: response.data
    });
}
