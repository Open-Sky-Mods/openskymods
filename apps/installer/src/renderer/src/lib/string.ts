export function prettyAirportName(airport: string): string {
  return airport.toUpperCase();
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
