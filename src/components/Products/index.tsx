import SectionTitle from "../Common/SectionTitle";
import SingleProduct from "./SingleProduct";
import productData from "./productData";

const Product = () => {
  return (
    <section
      id="product"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container space-y-4">
        <SectionTitle
          title="viSCADA 产品套件"
          paragraph=""
          mb="50px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-5 md:grid-cols-3 md:gap-x-6 lg:gap-x-6 xl:grid-cols-5">
          {productData.map((product) => (
            <div key={product.id} className="w-full">
              <SingleProduct product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
