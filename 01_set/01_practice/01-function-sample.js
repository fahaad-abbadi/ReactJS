const getUserInfo = (firstName, lastName, country, title, skills) => {
    return `${firstName} ${lastName}, a ${title} developer based in ${country}. He knows ${skills.join('`')}`
}

// when we call this function we need parameters
const skills = ['HTML', 'CSS', 'JS', 'React']
console.log(getUserInfo('Fahaad', 'Abbadi', 'India', 'Instructor', skills));