import React from 'react'

export default function Person({person, key}) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} old. I am {person.skill}.
            </h2>
        </div>
    )
}
