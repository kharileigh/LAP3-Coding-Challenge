import React from 'react';

export default function ({ user }) {
    return (
        <section>
        <div id='user'>
            <img src={user.avatar_url} alt="GitHub User" />
            <h2>{user.login}</h2>
            <h3>{user.repos_url}</h3>
            <h4>{user.followers_url}</h4>

        </div>

        </section>
    )
}

