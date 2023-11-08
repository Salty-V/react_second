function Products() {

    const passAvailable = 
   
    [{  title : "Pass Annuel TOP14 Standard",
        price : "650€",
        isPublished : true, },

    {   title : "Pass jeunes passionnés",
        price : "333€",
        isPublished : true, },

    {   title : "Pass tu passes pas",
        price : "2200€",
        isPublished : true, }]

    return (
    <main>
       {passAvailable.map((product) => {
            return (
            <article>
                <h3>{product.title}</h3>
            </article>
            );
       })}
    </main>
);
}

export default Products;