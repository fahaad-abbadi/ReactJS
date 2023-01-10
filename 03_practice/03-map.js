import React from 'react';

const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8]
]

//Skill component
const Skill = ({
    skill: [tech, level]
}) => (
    <li>
        {tech} {level}
    </li>
)

//Skills component
const Skills = ({ skills }) => {
    const skillsList = skills.map((skill) => <Skill skill={skill} />)
    console.log(skillsList);
    return <ul>{skillsList}</ul>
}

const App = () => {
    return (
        <div className="container">
            <div>
                <h1>Skill Level</h1>
                <Skills skills={skills} />
            </div>
        </div>
    )
}