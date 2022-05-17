const formatter = new Intl.NumberFormat()

export const formatNumber = (num) => formatter.format(num).replace(",", ".")
