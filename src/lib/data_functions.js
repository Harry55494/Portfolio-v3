export async function cacheData(CACHE_KEY, data, cache_duration_mins = 15) {
	const EXPIRY_DATE = Date.now() + cache_duration_mins * 60 * 1000;
	localStorage.setItem(
		CACHE_KEY,
		JSON.stringify({
			data,
			expiry_date: EXPIRY_DATE,
		}),
	);

	return data;
}

export async function fetchFromCache(CACHE_KEY, FORCE_NEW = false) {
	const cached = localStorage.getItem(CACHE_KEY);

	let parsed_json;

	if (cached && !FORCE_NEW) {
		parsed_json = JSON.parse(cached);
		if (parsed_json.expiry_date > Date.now()) {
			return parsed_json.data;
		}
	}

	// Data has expired, tell calling function to get more.
	return null;
}
