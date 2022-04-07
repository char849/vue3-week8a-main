// 千分號 (在main.js下做成全域屬性)
export function currency (num) {
  const n = parseInt(num, 10)
  return `${n
    .toFixed(0)
    .replace(/./g, (c, i, a) =>
      i && c !== '.' && (a.length - i) % 3 === 0
        ? `, ${c}`.replace(/\s/g, '')
        : c
    )}`
}

// 時間戳
export function date (time) {
  const date = new Date(time * 1000)
  return date.toLocaleDateString()
}
