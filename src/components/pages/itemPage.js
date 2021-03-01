import React, {Component} from 'react';
import {connect} from 'react-redux';
import withRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, onAddCard} from '../../actions';
import Spinner from '../spinner';

class ItemPage extends Component {
    componentDidMount(){
        if(this.props.menuItems.length === 0){
            this.props.menuRequested();

            const {RestoService} = this.props;
            RestoService.getMenu()
                .then(res => this.props.menuLoaded(res))
                .catch(error => this.props.menuError());
        }
    }

    render() {
        const {loading} = this.props;

        if(loading){
            return <Spinner/>
        }

        const item = this.props.menuItems.find((el) => {
            return +el.id === +this.props.match.params.id;
        });

        const {title, url, category, price, id} = item;

        return (
            <div className="menu__list">
                <div className="menu__item">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">Category: <span>{category}</span></div>
                    <div className="menu__price">Price: <span>{price}</span></div>
                    <button onClick={() => this.props.onAddCard(id)} className="menu__btn">Add to cart</button>
                    <span className={`menu__category__img ${category}`}></span>
                </div>
            </div>
        )
    }
};

const mapStatetoProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchtoProps = {
    menuLoaded,
    menuRequested,
    menuError,
    onAddCard
}


export default withRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(ItemPage));