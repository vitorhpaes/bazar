export function removeMask(maskedString: string) {
  const regex = /[^a-zA-Z0-9]/g
  return maskedString.replace(regex, '')
}
