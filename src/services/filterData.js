export function filterByStatus(data, status) {
  return data.filter(item => item.status === status);
}
