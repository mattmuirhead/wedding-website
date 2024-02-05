const invites = [
  {
    id: 1,
    people: ['everyone'],
    passcode: 'wannadisco',
  }
]

export const login = passcode => {
  const user = invites.find(invite => invite.passcode === passcode)
  return user
}