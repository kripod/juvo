export function parseBooleanish(value: unknown) {
  return Boolean(value) && value !== "false";
}
