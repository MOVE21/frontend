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
