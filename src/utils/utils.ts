export const isStartsWithNumber = (str: string) => str.startsWith("0")
  || str.startsWith("1")
  || str.startsWith("2")
  || str.startsWith("3")
  || str.startsWith("4")
  || str.startsWith("5")
  || str.startsWith("6")
  || str.startsWith("7")
  || str.startsWith("8")
  || str.startsWith("9")
  || str.startsWith("-");

export const getCoordinates = (input: string): { lon: number; lat: number } => {
  const splitInput = input.split(",");
  const lat = parseFloat(splitInput[0]);
  const lon = parseFloat(splitInput[1]);

  return { lon, lat };
};
