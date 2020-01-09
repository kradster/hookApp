import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
class BookList extends Component {

    static contextType = ThemeContext;
    render() {
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme?light:dark;
        return (
            <div className='book-list' style={{background:theme.bg,color:theme.syntax}}>
                <ul>
                    <li style={{background:theme.ui}}>The Way of you</li>
                    <li style={{background:theme.ui}}>Traviling buddy</li>
                    <li style={{background:theme.ui}}>reason to live</li>
                </ul>
            </div>
        );
    }
}

export default BookList;