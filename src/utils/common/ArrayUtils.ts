/**
 * Check if `array` is not `empty`
 *
 * @param array
 * @returns boolean
 */
export const isEmpty = <T>(array: T[] | undefined): boolean => {
  return !array || array.length == 0;
};

/**
 * Check if `array` is not `empty`
 *
 * @param array
 * @returns boolean
 */
export const isNotEmpty = <T>(array: T[] | undefined): boolean => {
  return !isEmpty(array);
};
