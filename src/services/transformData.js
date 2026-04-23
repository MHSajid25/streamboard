export function transformUserData(data) {
  return data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email.toLowerCase()
  }));
}
export function transformTaskData(data) {
  return data.map(item => ({
    title: item.title || item.name,
    status: "In Progress",
    owner: item.email || "unknown"
  }));
}
