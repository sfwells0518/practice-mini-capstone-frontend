export function ProductsIndex() {
  return (
    <div id="products-index">
      <h1>All Products</h1>
      <div className="products">
        <h2>Nike Air Max Pre-Day</h2>
        <p>It's the perfect mix: a splash of heritage Nike running and a whole lot of comfort.</p>
        <p>135</p>
        <img
          src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/d7bd759a-b003-4a75-8118-d3089852e9fd/air-max-pre-day-mens-shoes-JBXGg7.png"
          alt="" />
        <div>
          <button>More Info</button>
        </div>
      </div>

      <div className="products">
        <h2>Air Jordan 1 Low SE Craft</h2>
        <p>
          Consistently fresh and always on point, the low-profile AJ1 is one of the most iconic sneakers of all time.
        </p>
        <p>120</p>
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d359dee8-b075-463c-a15d-c2e4636c489f/air-jordan-1-low-se-craft-mens-shoes-rdVj5k.png"
          alt="" />
        <div>
          <button>More Info</button>
        </div>
      </div>

      <div className="products">
        <h2>Nike Air Pegasus 83</h2>
        <p>Travel first class without reservations in the Pegasus 83.</p>
        <p>95</p>
        <img
          src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/194cf5b8-41d5-4e5d-8625-d2f77f5ae9f7/air-pegasus-83-mens-shoes-frQ2Gk.png"
          alt="" />
        <button>More Info</button>
      </div>
    </div>
  );
}
