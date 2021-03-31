import React from 'react';
import PropTypes from 'prop-types';

function DetailAdminCard(props) {
  const { sale, status } = props;

  const mult = (strNum1, strNum2) => {
    const num1 = parseFloat(strNum1);
    const num2 = parseInt(strNum2, 10);
    const formated = (num1 * num2).toFixed(2).replace('.', ',');
    return formated;
  };

  const formatedTotalPrice = `R$ ${sale[0].total_price.replace('.', ',')}`;
  return (
    <div
      className="m-2 sm:m-4 md:m-8 lg:m-12 xl:m-16 sm:text-xl md:texl-2xl lg:text-3xl"
    >
      <div>
        <div
          className="flex justify-between m-5"
          data-testid={ `${sale[0].sale_id - 1}-order-card-container` }
        >
          <div
            data-testid="order-number"
            className="font-bold"
          >
            Pedido
            {' '}
            {sale[0].sale_id}
            {' - '}
            <span data-testid="order-status">{ status }</span>
          </div>
        </div>
        {
          sale.map((product, index) => {
            console.log(product);
            const formatedProductPrice = mult(product.price, product.quantity);
            return (
              <div
                key={ index }
                className="flex justify-between overflow-hidden rounded-lg shadow-lg"
              >
                <div
                  className="m-4 font-bold"
                  data-testid={ `${index}-product-qtd` }
                >
                  {product.quantity}
                </div>
                <div
                  className="m-4"
                  data-testid={ `${index}-product-name` }
                >
                  {product.name}
                </div>
                <div
                  className="m-4"
                  data-testid={ `${index}-product-total-value` }
                >
                  {`R$ ${formatedProductPrice}`}
                </div>
                <div
                  className="m-4 sm:m-4 md:m-6 lg:m-8 xl:m-10
                    text-sm lg:text-base xl-text-lg"
                  data-testid={ `${index}-order-unit-price` }
                >
                  {`(R$ ${product.price.replace('.', ',')})`}
                  {' '}
                  un.
                </div>
              </div>
            );
          })
        }
        <div
          className="flex justify-end mt-3 font-bold"
          data-testid="order-total-value"
        >
          Total:
          {' '}
          {formatedTotalPrice}
        </div>
      </div>
    </div>
  );
}

DetailAdminCard.propTypes = {
  sale: PropTypes.arrayOf(),
}.isRequired;

export default DetailAdminCard;
