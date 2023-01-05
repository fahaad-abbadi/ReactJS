//one way of writing the JSX element 
const sample = <h>Hello world!</h>
const ComponentName = () => {
    return sample;
}


//likewise, the other way is
const header = (
    <header>
        <div className="header-wrapper">
            <h1>This is one way of writing the jsx element</h1>
            <p>I can keep paragraph</p>
            <b>I can keep some bold text</b>
            <p>I can even keep this blue link</p>
            <a href="https://www.youtube.com">Click here</a>
            <p>To be honest, We can keep HTML thing over here</p>
        </div>
    </header>
)

//React Component 
const Header1 = () => {
    return header;
}


//the other way of writing the code is 
const Header2 = () => {
    return (
        <header>
            <div className="header-wrapper">
                <h1>This is one way of writing the jsx element</h1>
                <p>I can keep paragraph</p>
                <b>I can keep some bold text</b>
                <p>I can even keep this blue link</p>
                <a href="https://www.youtube.com">Click here</a>
                <p>To be honest, We can keep HTML thing over here</p>
            </div>
        </header>
    )
}

//the another way is 
//here, we use small brackers
//we are explicitly returning the JSX
const Header3 = () => (
    <header>
        <div className="header-wrapper">
            <h1>This is one way of writing the jsx element</h1>
            <p>I can keep paragraph</p>
            <b>I can keep some bold text</b>
            <p>I can even keep this blue link</p>
            <a href="https://www.youtube.com">Click here</a>
            <p>To be honest, We can keep HTML thing over here</p>
        </div>
    </header>
)