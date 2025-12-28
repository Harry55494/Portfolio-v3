export async function cacheData(cacheKey, cacheData, cacheDuration = 15) {
	const calculatedExpiryDate = Date.now() + cacheDuration * 60 * 1000;
	localStorage.setItem(
		cacheKey,
		JSON.stringify({
			cacheData,
			expiry_date: calculatedExpiryDate,
		}),
	);
}

export async function fetchFromCache(cacheKey, FORCE_NEW = false) {
	const fetchedCached = localStorage.getItem(cacheKey);

	let parsed_json;

	if (fetchedCached && !FORCE_NEW) {
		parsed_json = JSON.parse(fetchedCached);
		if (parsed_json.expiry_date > Date.now()) {
			return parsed_json.cacheData;
		}
	}

	// Data has expired, tell calling function to get more.
	return null;
}
