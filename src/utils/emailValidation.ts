
export const validateEmail = (email: string): { isValid: boolean; error?: string } => {
  if (!email) {
    return { isValid: false, error: "Email is required" };
  }

  // Comprehensive email regex pattern
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: "Please enter a valid email address" };
  }

  // Check for common typos in popular domains
  const commonDomainTypos = {
    'gmial.com': 'gmail.com',
    'gmai.com': 'gmail.com',
    'yahooo.com': 'yahoo.com',
    'hotmial.com': 'hotmail.com',
    'outlok.com': 'outlook.com'
  };

  const domain = email.split('@')[1]?.toLowerCase();
  if (domain && commonDomainTypos[domain as keyof typeof commonDomainTypos]) {
    return { 
      isValid: false, 
      error: `Did you mean ${email.replace(domain, commonDomainTypos[domain as keyof typeof commonDomainTypos])}?` 
    };
  }

  return { isValid: true };
};

export const isValidEmailFormat = (email: string): boolean => {
  return validateEmail(email).isValid;
};
