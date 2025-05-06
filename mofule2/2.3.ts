{
  type GenericArray<T> = Array<T>;

  const studentName: GenericArray<string> = ["Prtom Chakma"];

  const studentId: GenericArray<number> = [1, 2, 3, 4, 5];

  const isClassCaptain: GenericArray<boolean> = [true, false];

  const user: GenericArray<{ name: string; age: number; isStudent: boolean }> =
    [
      {
        name: "Pritom Chakma",
        age: 23,
        isStudent: true,
      },
      {
        name: "Ranvir Shing",
        age: 25,
        isStudent: true,
      },
    ];
}
