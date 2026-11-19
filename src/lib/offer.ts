export const offer = {
  name: "Protocolo Cicatriz Invisível + Sono de Mãe",
  price: 29.9,
  originalPrice: 97,
  guaranteeDays: 20,
  checkoutUrl: "",
};

export const formatBRL = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
