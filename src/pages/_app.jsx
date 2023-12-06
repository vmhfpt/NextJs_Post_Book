import Layout from '../pages/components/layout'
import '../../public/css/index.css';
import '../../public/css/detail-product.css';
import '../../public/css/grid.css';
import '../../public/css/product.css';
import '../../public/responsive/detail-product.css';
import '../../public/responsive/index.css';
import '../../public/responsive/product.css';
import '../../public/css/monokai.css';



export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}