// utils/localStorage.js

export const getStoredApps = () => {
  const stored = localStorage.getItem("installedApps");
  return stored ? JSON.parse(stored) : [];
};

export const saveApp = (app) => {
  const stored = getStoredApps();

  const exists = stored.find((item) => item.id === app.id);

  if (!exists) {
    stored.push(app);
    localStorage.setItem("installedApps", JSON.stringify(stored));
    return true; // success
  }

  return false; // already exists
};