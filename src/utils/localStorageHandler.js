export const setItem = (key, value) => {
  localStorage.setItem(
    key,
    typeof value === "string" ? value : JSON.stringify(value)
  );
};

export const getItem = (key) => {
  const item = localStorage.getItem(key);
  try {
    // Attempt to parse, if it's JSON, otherwise return as is
    return JSON.parse(item);
  } catch {
    return item; // Return the string directly if parsing fails
  }
};

export const removeItem = (key) => {
  localStorage.removeItem(key);
};
