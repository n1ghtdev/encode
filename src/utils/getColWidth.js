export function getColWidth(lg = null, md = null, sm = null, xs = null) {
  const calc = {
    lg() {
      if (lg === null) {
        return 12;
      }
      return lg;
    },
    md() {
      if (md === null) {
        return lg;
      }
      return md;
    },
    sm() {
      if (sm === null) {
        return md !== null ? md : lg;
      }
      return sm;
    },
    xs() {
      if (xs === null && sm === null) {
        return md !== null ? md : lg;
      } else if (xs === null && sm !== null) {
        return sm;
      }
      return xs;
    },
    callAll() {
      this.lg();
      this.md();
      this.sm();
      this.xs();
    },
  };

  const percentageWidth = (columns) => (100 / 12) * columns;

  const args = [...arguments];

  if (args.length === 1) {
    return percentageWidth(calc.lg());
  } else if (args.length === 2) {
    return percentageWidth(calc.md());
  } else if (args.length === 3) {
    return percentageWidth(calc.sm());
  } else if (args.length === 4) {
    return percentageWidth(calc.xs());
  }
}
