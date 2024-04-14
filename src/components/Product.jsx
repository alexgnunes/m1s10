// Neste exercício, você deve criar um componente de "card" que receba o título, descrição e valor de um produto.
// Utilize o PropTypes para validar as propriedades recebidas e garantir a integridade dos dados.

import PropTypes from "prop-types";

function Product({ title, description, value }) {
  return (
    <div className="title">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{value}</p>
    </div>
  );
}

Product.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.number,
}

export default Product;
