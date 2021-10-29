export function hasItemWithTheSameId<T extends { id: string }>(
  array: T[],
  item: T
) {
  return array.find((element) => element.id === item.id);
}
