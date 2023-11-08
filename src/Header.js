function Header() {

    const isUserLogged = true;
    const itemsInCart = 12 ;

    const userLogged = {
        firstName : "Camille",
        lastName : "Blanchy",
        job : "dev",
    };


    return (
        <header>
            <nav>
                <ul>
                    {isUserLogged ? (
                    <li class="first">
                        {userLogged.firstName} {userLogged.lastName} - {userLogged.job}
                    </li>
                    ) : ( 
                    <li>Veuillez vous connecter</li>
)}
                    <li>UBB</li>
                    <li>ASM</li>
                    <li>ST</li>
                    <li>Racing</li>

                    {itemsInCart > 0 ? <li>Cart : {itemsInCart}</li> : <li>Your cart is empty</li>}
                </ul>
            </nav>
        </header>
);
}


export default Header;