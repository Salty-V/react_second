function Products() {

    const passAvailable = 
   
    [{  title : "Pass Annuel TOP14 Standard",
        price : 650 + "€",
        isPublished : true, },

    {   title : "Pass jeunes passionnés",
        price : 333 + "€",
        isPublished : true, },

    {   title : "Pass qui dépasse",
        price : 2200 + "€",
        isPublished : true, }]

    return (
    <main>
       {passAvailable.map((product) => {
            return (
            <>
                {product.isPublished ? (
                    <article>
                        <h3>{product.title}</h3>
                        <p>{product.price}</p>
                    </article>
                ) : (
                    <p>Ces places ne sont pas encore disponibles</p>
                )}
            </> 
            );
                })}
    </main>
   )};

export default Products;