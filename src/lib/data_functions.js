export async function cacheData(CACHE_KEY, data) {
	localStorage.setItem(
		CACHE_KEY,
		JSON.stringify({
			data,
			timestamp: Date.now(),
		}),
	);

	return data;
}

export async function fetchFromCache(CACHE_KEY, FORCE_NEW = false) {
	const CACHE_DURATION = 15 * 60 * 1000;

	const cached = localStorage.getItem(CACHE_KEY);
	let data;

	if (cached && !FORCE_NEW) {
		data = JSON.parse(cached).data;
		if (JSON.parse(cached).timestamp + CACHE_DURATION > Date.now()) {
			return data;
		}
	}

	// Data has expired, tell calling function to get more.
	return null;
}
