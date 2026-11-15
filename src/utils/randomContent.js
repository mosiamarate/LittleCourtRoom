function selectRandomContent(items, previousId, random = Math.random) {
  if (!Array.isArray(items) || items.length === 0) {
    return null
  }

  const validItems = items.filter((item) => item && item.id !== previousId)
  const candidates = validItems.length > 0 ? validItems : items.filter(Boolean)

  if (candidates.length === 0) {
    return null
  }

  const index = Math.floor(random() * candidates.length)
  return candidates[index] ?? candidates[0]
}

export { selectRandomContent }
