export const getPaid = () => {
  const paid = localStorage.getItem("paid");
  if (paid) return JSON.parse(paid);
  return [];
};

export const handlePaid = (bill) => {
  const paid = getPaid();
  const isExist = paid.find((b) => b.id === bill.id);

  if (isExist) {
    return false;
  }

  paid.push(bill);
  localStorage.setItem("paid", JSON.stringify(paid));
  return true;
};


