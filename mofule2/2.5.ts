{
  // Use the function with Generic

  const CreateArray = (param: string): string[] => {
    return [param];
  };

  const CreateArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const result1 = CreateArray("Bangladesh");
  const result2 = CreateArrayWithGeneric<string>("Bangladesh");
  const result3 = CreateArrayWithGeneric<{ id: number; name: string }>({
    id: 1243,
    name: "Pritom Chakma",
  });
}
