import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import withRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, onAddCard} from '../../actions';
import Spinner from '../spinner';
import Error from '../error-boundry';
import './menu-list.scss';

class MenuList extends Component {
    componentDidMount(){
        this.props.menuRequested();

        const {RestoService} = this.props;
        RestoService.getMenu()
            .then(res => this.props.menuLoaded(res))
            .catch(res => this.props.menuError());
    }

    render() {
        const {menuItems, loading, error, onAddCard} = this.props;

        if(loading){
            return <Spinner/>
        }

        if(error){
            return <Error/>
        }

        const items = menuItems.map(menuItem => {
            return (<MenuListItem 
                        key={menuItem.id} 
                        menuItem={menuItem}
                        onAddToCard={() => onAddCard(menuItem.id)}/>
                    )
        })

        return (
            <View items={items}/>
        )
    }
};

const View = ({items}) => {
    return(
        <ul className="menu__list">
            {items}
        </ul>
    )
}

const mapStatetoProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error,
    }
}

const mapDispatchtoProps = {
    menuLoaded,
    menuRequested,
    menuError,
    onAddCard
}


export default withRestoService()(connect(mapStatetoProps, mapDispatchtoProps)(MenuList));