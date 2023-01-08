//it is a special keyword in react that stand fro properties and is being used to pass data from one component to another and mostly from parent component to child component
const getUserInfo = (firstName, lastName, country) => {
    return `${firstName} ${lastName}. Lives in ${country}`
}


//calling functions
getUserInfo('Fahaad', 'Abbadi', 'India')

//User component, component should start with an uppercase

const User = (props) => {
    return (
        <div>
            <h1>
                {props.firstName}
                {props.lastName}
            </h1>

            <small>{props.country}</small>
        </div>
    )
}

//calling or instantiating a component, this component has three properties and we call them props
<User firstName='Fahaad' lastName='Abbadi' country='India'></User>