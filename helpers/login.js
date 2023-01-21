const invites = [
  {
    id: 1,
    people: ['Matt', 'Coral'],
    passcode: 'matt',
  }
]

export const login = passcode => {
  const user = invites.find(invite => invite.passcode === passcode)
  return user
}