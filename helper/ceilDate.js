const ceilDate = (unixTime, option) => {
  const oneDay = 60 * 60 * 24
  const t1 = new Date(unixTime * 1000)
  const fullYear = t1.getFullYear()
  const fullMonth = t1.getMonth()
  const fullDay = t1.getDate()
  const t2 = new Date(fullYear, fullMonth, fullDay)
  return !option ? t2 / 1000 : t2 / 1000 + (oneDay - 1)
}

module.exports = { ceilDate }
