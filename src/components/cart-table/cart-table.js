import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {onDeleteCard} from '../../actions';
import withRestoService from '../hoc';

const CartTable = ({items, onDeleteCard, RestoService}) => {
    if(items.length === 0){
        return(
            <div className="cart__title">Ваша корзина пуста</div>
        )
    }
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item => {
                    const {url, title, price, id, quantity} = item;
                    return( 
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-price">{price}$ * {quantity}</div>
                            <div onClick={() => onDeleteCard(id)} className="cart__close">&times;</div>
                        </div>
                    )
                    })
                }
            </div>
			<button onClick={() => {RestoService.setOrder(generateOrder(items))}} className="order">Оформите заказ</button>
        </>
    );
};

const generateOrder = (items) => {
	const newOrder = items.map(item => {
		return {
			id: item.id,
			quantity: item.quantity
		}
	})
	return newOrder
}

const mapStatetoProps = ({items}) => {
    return {
        items
    }
}

const mapDispatchtoProps = {
    onDeleteCard
}

export default withRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(CartTable));