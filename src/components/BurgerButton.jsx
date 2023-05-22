const BurgerButton = (props) => {
    return (
        <div class={`icon nav-icon-5 ${props.menu ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default BurgerButton;