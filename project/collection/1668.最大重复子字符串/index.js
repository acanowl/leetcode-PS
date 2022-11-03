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
  
}
