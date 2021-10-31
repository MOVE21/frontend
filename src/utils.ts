interface WithId {
  id: string;
}

export function removeItemWithId<T extends WithId>(
  array: T[],
  id: WithId["id"]
) {
  return array.filter((element) => element.id !== id);
}

export function addIfNoCopies<T extends WithId>(array: T[], item: T) {
  if (array.find((element) => element.id === item.id)) return array;
  return [...array, item];
}

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));
