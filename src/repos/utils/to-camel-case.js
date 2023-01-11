module.exports = (rows) => {
  return rows.map((row) => {
    const replaced = {};

    for (let key in row) {
      const camelCase = key
        .replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase())
        .replace(/^\w/, (c) => c.toLowerCase());

      replaced[camelCase] = row[key];
    }

    return replaced;
  });
};
