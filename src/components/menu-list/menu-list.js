import React, { Component } from 'react';
import { connect } from 'react-redux';
import WithRestoService from '../hoc';
import MenuListItem from '../menu-list-item';
import { addToCart, menuLoaded, menuRequested } from '../../actions';
import './menu-list.scss';
import Spinner from '../spinner';


class MenuList extends Component {

    componentDidMount() {
        this.props.menuRequested();
        const { RestoService } = this.props
        RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res))
            // .catch(console.log('error'))
    }
    render() {
        const { menuItems, loading, addToCart } = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <ul className="menu__list">
                {
                    menuItems.map(menuItem => {
                        return <MenuListItem
                            key={menuItem.id}
                            menuItem={menuItem}
                            onAddToCart={() => addToCart(menuItem.id)} />
                    })
                }
            </ul>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        menuLoaded: (newMenu) => {
            dispatch(menuLoaded(newMenu))
        },
        menuRequested: () => {
            dispatch(menuRequested())
        },
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));