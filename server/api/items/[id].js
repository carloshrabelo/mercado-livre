const fetch = require("node-fetch");
const slicePrice = require("./_slicePrice");
const API = "https://api.mercadolibre.com/";

const _fetch = async url =>
  await fetch(url).then(res => {
    if (!res.ok) throw res.message;
    return res.json();
  });

const increase = async data => {
  const { path_from_root } = await _fetch(
    `${API}/categories/${data.category_id}`
  );
  const { symbol } = await _fetch(`${API}/currencies/${data.currency_id}`);

  return {
    ...data,
    categories: path_from_root.map(el => el.name),
    currency: symbol
  };
};

const formater = ({
  id,
  title,
  price,
  pictures,
  condition,
  shipping: { free_shipping },
  sold_quantity,
  plain_text = "",
  currency
}) => ({
  id,
  title,
  price: {
    currency,
    ...slicePrice(price)
  },
  picture: pictures[0].url,
  condition,
  free_shipping,
  sold_quantity: sold_quantity,
  description: plain_text
});
module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const description = await _fetch(`${API}/items/${id}/description`);
    const { categories, ...data } = await _fetch(`${API}/items/${id}`).then(
      increase
    );
    const result = {
      author: {
        name: "Carlos Henrique",
        lastname: "Rabelo"
      },
      categories,
      item: formater({
        ...data,
        ...description
      })
    };
    res.send(result);
  } catch (e) {
    res.send(e);
  }
};
