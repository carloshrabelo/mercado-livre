const fetch = require("node-fetch");
const slicePrice = require("./_slicePrice");
const API = "https://api.mercadolibre.com";

const reducer = name => [(v, r) => (r[name] ? [...v, ...r[name]] : v), []];
const formater = ({
  id,
  title,
  price,
  address: { city_name },
  currency_id,
  thumbnail,
  condition,
  shipping: { free_shipping }
}) => ({
  id,
  title,
  location: city_name,
  price: {
    price: slicePrice(price),
    currency: currency_id
  },
  picture: thumbnail,
  condition,
  free_shipping
});
module.exports = async (req, res) => {
  const { q } = req.query || "";
  try {
    const { results, filters = [] } = await fetch(
      `${API}/sites/MLA/search?q=${q}`
    ).then(result => {
      if (!result.ok) throw result.message;
      return result.json();
    });
    const items = results.slice(0, 4).map(formater);
    const categories = filters
      .reduce(...reducer("values"))
      .reduce(...reducer("path_from_root"))
      .map(p => p.name);

    res.send({
      author: {
        name: "Carlos Henrique",
        lastname: "Rabelo"
      },
      categories,
      items
    });
  } catch (e) {
    res.send(e);
  }
};
