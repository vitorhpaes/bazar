function hexToRgb(hex) {
  // Remover o "#" se estiver presente
  hex = hex.replace(/^#/, '')

  // Converter o hexadecimal para RGB
  const bigint = parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return [r, g, b]
}

export default hexToRgb
