import React, { Component } from 'react';

class Settings extends Component {
    exitApp(){
        // Выход из приложения
        localStorage.removeItem('vkdata');

        document.location.href = '/';
    }

     render(){
        return(
            <div className="settings-body">
                <input type="button" value="Выйти из VK Messanger" className="settings-btn-exit" onClick={this.exitApp} />
            </div>
        );
     }
}

export default Settings;