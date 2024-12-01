import { stringReader } from '../shared.js'

const { DAY, TEST } = process.env
const munge = () => {
  const raw = stringReader(`./${DAY}/${TEST}`).reduce((acc, row) => {
    const [l, r] = row.split(/\s+/)
    acc.left.push(Number.parseInt(l))
    acc.right.push(Number.parseInt(r))
    return acc
  }, { left: [], right: [] })
  raw.right.sort()
  raw.left.sort()
  return raw
}

const p1 = async () => {
  const { left, right } = munge()
  return left.reduce((a, l, i) => a + Math.abs(l - right[i]), 0)
}

const p2 = async () => {
  const { left, right } = munge()
  const counts = right.reduce((a, n) => {
    a[n] += 1
    return a
  }, Object.fromEntries(right.map(k => [k, 0])))

  return left.reduce((s, n) =>  s + (n * (counts[n] || 0)), 0)
}

export {
  p1,
  p2
}
