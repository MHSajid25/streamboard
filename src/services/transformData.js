export function transformUserData(data) {
  return data.map(user => ({
    id: user.id,
    name: user.name,
    email: user.email.toLowerCase()
  }));
}
