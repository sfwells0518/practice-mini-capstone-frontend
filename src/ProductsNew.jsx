export function ProductsNew() {
  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form>
        <div>
          name: <input type="text" />
        </div>
        <div>
          description: <input type="text" />
        </div>
        <div>
          price: <input type="text" />
        </div>
        <div>
          image: <input type="text" />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}
