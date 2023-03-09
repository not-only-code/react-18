export const createFetchData = (path) =>
  async () => {
    const result = await fetch(`${process.env.API_URL}${path}`, { cache: 'no-store' });
    return result.json();
  }
