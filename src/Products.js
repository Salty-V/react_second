function Products() {

    const passAvailable = ["Pass Annuel TOP14 Standard","Pass jeunes passionnés", "Pass tu passes pas"]

    return (
    <main>
       {passAvailable.map((product) => {
            return (
            <article>
                <h3>{product}</h3>
            </article>
            );
       })}
    </main>
);
}

export default Products;