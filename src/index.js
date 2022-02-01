import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/IMG_0666.jpeg';
import profile2 from './image/IMG_0647.jpeg';
import profile3 from './image/IMG_0533 2.jpeg';
import UserCard from './UserCard';



const App = () => {
    return (
        <div className='ui comments'>
            
            <UserCard>
                <SingleComment
                    name='Alex'
                    date='Today at 5:00Pm'
                    text='It is amazing'
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Jack'
                    date='Today at 6:00Pm'
                    text='Great job'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Sarah'
                    date='Today at 7:00Pm'
                    text='Thanks'
                    picture={profile3}
                />
            </UserCard>

        </div>
    )

}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)