/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
export const maxRepeating_1 = (sequence, word) => {
  let count = 0
  while (sequence.includes(word.repeat(count))) {
    count++
  }
  return count - 1
}

export const maxRepeating_2 = (sequence, word) => {
  console.log('------------------------')
  let sl = sequence.length, wl = word.length, max = 0, count = 0, i = 0
  if (sl < wl) return max

  while (i < sl) {
    let cur = sequence.slice(i, i + wl)
    console.log(cur, i, 'cur & i', cur === word, count)
    if (cur === word) {
      count++
      i = i + wl
      max = Math.max(max, count)
    } else {
      i += count > 0 ? 1 - wl : 1
      count = 0
    }
  }
  return max
}
