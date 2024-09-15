function Title({textColor = "red", children = "Default Text"}) {

    return <h1 style={{color: textColor}}>{children}</h1>;
}

export default Title;