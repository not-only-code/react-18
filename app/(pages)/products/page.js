import Image from '../../components/image';
import styles from './index.module.css';

const ProductCard = ({ product }) => (
  <article className={styles['product-card']} title={product.name}>
    <header>
      <Image src={product.image} alt={product.name} width={383} height={383} />
      <label className={['label', styles.price].join(' ')}>{product.price} €</label>
    </header>
    <footer>
      <p className={styles.name}>{product.name}</p>
      <p>{product.category}</p>
      <p className={styles.colours}>{product.colours} colours</p>
    </footer>
  </article>
);

const getProducts = async () => {
  const result = await fetch(`${process.env.API_URL}/products`);
  return result.json()
};

const Products = async () => {
  const products = await getProducts();

  return (
    <>
      <header>
        <h2>Super impressive products grid</h2>
      </header>
      <div className={styles['grid-container']}>
        {products.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  )
}

export default Products;