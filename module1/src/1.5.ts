{
    
const user: {
  firstName: string;
  lastName: string;
  age?: number;
  institute: "Programming Hero";
  isMarried?: boolean;
} = {
  firstName: "Pritom",
  lastName: "Chakma",
  age: 22,
  institute: "Programming Hero",
  isMarried: true,
};

const arr: number[] = [1, 2, 3];

const newArray: number[] = arr.map((e: number): number => e * e);
}