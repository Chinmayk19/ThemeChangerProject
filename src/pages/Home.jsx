import React from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import SidebarLayout from '../components/SidebarLayout';
import Footer from '../components/Footer';

const Home = () => {
  const { data, loading, error } = useFetchProducts();

  return (
    <SidebarLayout>
      <div className="mb-4">
        <h1 className="display-6 fw-bold">Welcome to ThemeApp</h1>
        <p className="lead">
          This is a demonstration of a multi-theme React application. Themes change colors, structure,
          fonts, spacing, and layout. Bootstrap ensures responsive behavior.
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {loading && <div className="col-12">Loading products...</div>}
        {error && (
          <div className="col-12">
            <div className="alert alert-danger">Failed to load products.</div>
          </div>
        )}
        {!loading &&
          !error &&
          data.slice(0, 6).map((prod) => (
            <div className="col" key={prod.id}>
              <ProductCard
                title={prod.title}
                description={prod.description}
                image={prod.image}
                category={prod.category}
                price={prod.price}
              />
            </div>
          ))}
      </div>
      <Footer/>
    </SidebarLayout>
  );
};

export default Home;
