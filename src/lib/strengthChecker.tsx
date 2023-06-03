export function getStrengthValue(value: string): string {
  const regex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (regex.test(value)) {
    return "success-500"; // Strong
  } else if (value.length >= 8) {
    return "warning-500"; // Moderate
  } else {
    return "failed-500"; // Weak
  }
}