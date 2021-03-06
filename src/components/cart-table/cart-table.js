import React from 'react';
import { connect } from 'react-redux';
import { deledFromCart } from '../../actions';
import './cart-table.scss';

const CartTable = ({ items, deledFromCart }) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {
                    items.map(item => {
                        const { title, url, price, id } = item;
                        return (
                            <div key={id} className="cart__item">
                                <img src={url} className="cart__item-img" alt={title}></img>
                                <div className="cart__item-title">{title}</div>
                                <div className="cart__item-price">{price}$</div>
                                <div onClick={() => deledFromCart(id)} className="cart__close">&times;</div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    );
};

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deledFromCart: (id) => {
            dispatch(deledFromCart(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartTable);