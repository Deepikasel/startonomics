export function getCountryCounts(startups) {
  const counts = {};

  startups.forEach((startup) => {
    const country = startup.country;

    if (country) {
      counts[country] = (counts[country] || 0) + 1;
    }
  });

  return counts;
}
