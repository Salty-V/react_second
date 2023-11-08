function Header() {

    const isUserLogged = false;

    return (
        <header>
            <nav>
                <ul>
                    <li>Mais c'est qui? C'était</li>
                    <li>Loli</li>
                    <li>Lolo</li>
                    <li>Lola</li>

                    {isUserLogged ? <li>Camille Blanchy</li> : <li>Veuillez vous connecter</li>}
                </ul>
            </nav>
        </header>
);
}

export default Header;