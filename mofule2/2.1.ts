{
  let anything: any;

  anything = "Pritom Chakma";

  // anything = 222;

  anything as string;

  const KgToGm = (value: string | number | undefined) => {
    if (typeof value === "string") {
      const convert = parseFloat(value) * 1000;
      console.log(`The result is: ${convert}`);
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };
}
