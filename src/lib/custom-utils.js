export const formatRupiah = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

export const trimUsername = (username) => {
  // Trim max 10 char from username
  if (username.length > 120) {
    return username.substring(0, 120) + "...";
  } else {
    return username;
  }
};

