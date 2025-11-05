export async function cacheData(CACHE_KEY, ENDPOINT) {
	var data;

	const response = await fetch(ENDPOINT, { method: "GET" });
	data = await response.json();

	localStorage.setItem(
		CACHE_KEY,
		JSON.stringify({
			data,
			timestamp: Date.now(),
		}),
	);

	return data;
}

export async function checkAndFetchData(CACHE_KEY, ENDPOINT) {
	const CACHE_DURATION = 5 * 60 * 1000;

	const cached = localStorage.getItem(CACHE_KEY);
	let data;

	if (cached) {
		data = JSON.parse(cached).data;
		if (JSON.parse(cached).timestamp + CACHE_DURATION > Date.now()) {
			return data;
		}
	}

	// Fetching new data

	return await cacheData(CACHE_KEY, ENDPOINT);
}
