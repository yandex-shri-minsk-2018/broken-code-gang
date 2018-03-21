import React from 'react';
import { Avatar } from '../Avatar/Avatar'

export function HeaderCenterItems (props) {
    return (
        <div className='Header__content'>
            <Avatar image = {{
                "src": "https://avatars.mds.yandex.net/get-pdb/1008348/cab77028-8042-4d20-b343-a1498455e4c8/s1200",
                "modifier": "avatar-m",
            }}/>
             <div className='Header__content__item'>
                <h2 >{props.groupName}</h2>
                <p>{props.participants}</p>
            </div>
        </div>
    );
}
