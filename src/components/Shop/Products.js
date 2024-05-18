import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const testItems = [
    {
      id: 1,
      title: "Test",
      price: 6,
      description: "This is a first product - amazing!",
      quantity: 1,
    },
    {
      id: 2,
      title: "Laptop",
      price: 12,
      description: "This is a first product - amazing!",
      quantity: 1,
    },
    {
      id: 3,
      title: "School Bag",
      price: 24,
      description: "This is a first product - amazing!",
      quantity: 1,
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {testItems.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </ul>
    </section>
  );
};

export default Products;
