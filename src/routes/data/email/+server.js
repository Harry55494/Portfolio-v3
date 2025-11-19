import { json } from "@sveltejs/kit";
import { EMAIL_ADDRESS } from "$env/static/private";

export async function GET() {
	return json({
		email: EMAIL_ADDRESS,
	});
}
