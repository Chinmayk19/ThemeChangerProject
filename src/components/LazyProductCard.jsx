import  { useEffect, useRef, useState, lazy, Suspense } from 'react';

const ProductCard = lazy(() => import('./ProductCard'));

const LazyProductCard = (props) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <Suspense>
          <ProductCard {...props} />
        </Suspense>
      )}
    </div>
  );
};

export default LazyProductCard;
