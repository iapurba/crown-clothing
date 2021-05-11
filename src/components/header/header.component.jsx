import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

import './header.styles.scss';


const Header = ({ currentUser }) => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='logo'></Logo>
        </Link>
        <div className="options">
            <Link className='option' to='shop'>Shop</Link>
            <Link className='option' to=''>Contact</Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>Sign out</div>
                    :
                    <Link className='option' to='/signin'>Sign in</Link>
            }
        </div>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);