export function readLocal(key: string) {
  try {
    const item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  } catch (error) {
    console.error("something error whengetting data");
  }
}

export function saveLocal<T = {}>(item: T, key: string) {
  const savedItem = JSON.stringify(item);
  return localStorage.setItem(key, savedItem);
}
