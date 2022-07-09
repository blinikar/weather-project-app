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
  const lon = parseInt(splitInput[0], 10) / 100;
  const lat = parseInt(splitInput[1], 10) / 100;
  return { lon, lat };
};
