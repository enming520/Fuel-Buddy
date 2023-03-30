export const confirmPasswordValidator = (password, confirmPassword) => {
    if (!confirmPassword) return 'Confirm password cannot be empty.';
    if (password !== confirmPassword) return 'Passwords do not match.';
    return '';
  };
  