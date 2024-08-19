export * as ArrayUtils from './ArrayUtils';

export function getInitials(name: string | undefined): string {
  // Split the name into parts using space as a delimiter
  const parts = name?.split(' ');
  // Map each part to its first character and join with an empty string
  const initials = parts?.map(part => part.charAt(0).toUpperCase()).join('');
  return initials ?? 'U';
}