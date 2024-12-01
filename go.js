#! /usr/bin/env node

process.env.DAY = process.argv[2]
process.env.PART = process.argv[3] || 'p1'
process.env.TEST = process.argv[4] || 'fake'

const { DAY, PART, TEST } = process.env
console.log("Running: day", [DAY, PART, TEST].join(', '))

const main = async () => {
  try {
    const solution = await (await import(`./${DAY}/main.js`))[PART](TEST)
    console.log(`Solution for ${DAY}, ${PART} (${TEST}):`, solution)
  } catch (e) {
    console.log(e)
    process.exit(1)
  } finally {
    process.exit(0)
  }
}

main()
