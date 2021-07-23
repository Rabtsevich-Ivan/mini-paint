import React, { FC } from 'react'
import { Link, useHistory } from 'react-router-dom';
import HomePage from '../../../pages/Home/HomePage';
import PaintPage from '../../../pages/paint/PaintPage';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';

export const Header: FC<Props> = ({ condition }) => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    async function handleLogout() {
        try {
            await logout()
            history.push('/login');
        } catch {

        }
    }

    return (
        <header>
            <div className="container">
                <nav className="nav-bar">
                    <ul>
                        { condition ? 
                              <li><Link to='/' className="nav-link">Images</Link></li> 
                            : <li><Link to='/paint' className="nav-link">Paint</Link></li>
                        }
                        <li><a className="nav-link" onClick={handleLogout}>Sign Out</a></li>
                        <li><a className="nav-link">{currentUser.email}</a></li>
                    </ul>
                </nav>
                <hr />
            </div>
        </header>
    )
}

interface Props {
    condition: boolean,
}

Header.propTypes = {
    condition: PropTypes.bool
}
