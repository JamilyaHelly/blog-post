import React from 'react';

const UserCard = (props) => {
    console.log(props);
    return (

        <div className="ui card">
            <div className="content">
                <div className="header">
                    Alex Tancreadi
                  <div className="description">
                        { props.children }
                    </div>

                </div>
            </div>
            <div className='ui buttom button'>
                <i className='add icon'></i>
        Add Friend
            </div>
        </div>
    )

}
export default UserCard;
