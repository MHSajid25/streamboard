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

export function transformMetricData(data) {
  return data.map(item => ({
    label: item.name || item.title,
    value: item.value || 0
  }));
}
