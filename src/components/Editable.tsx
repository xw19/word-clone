import React from 'react';

export const Editable: React.FC = () => {
    return(
        <div 
            contentEditable={true}
            style={{
            width: '60%',
            height: '85vh',
            margin: '20px auto',
            backgroundColor: '#fff',
            outline: 'none',
            border: '2px solid #bbb',
            padding: 20
        }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at id distinctio. Dolor earum quasi sint perspiciatis illum dolore adipisci cum eos tempora neque eveniet perferendis, consequatur a rem architecto.
        </div>
    )
}