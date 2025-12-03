import { json } from "@sveltejs/kit";
import { Octokit } from "octokit";
import { GITHUB_API_TOKEN } from "$env/static/private";

export async function GET({ url }) {
	const octokit = new Octokit({
		auth: GITHUB_API_TOKEN,
	});

	const repo = url.searchParams.get("repo");

	const response = await octokit.request(
		`GET /repos/{username}/${repo}/commits`,
		{
			username: "harry55494",
			headers: {
				"X-GitHub-Api-Version": "2022-11-28",
				Accept: "application/vnd.github+json",
			},
		},
	);

	return json({
		commits: response.data,
	});
}
