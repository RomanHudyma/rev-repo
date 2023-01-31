import HeadComponent from '@components/common/Head';
import {
  productControllerGetAllProducts,
  categoryControllerGetAllCategories,
  ProductResponsePaginatedList,
  Category,
} from '@services/baseApi';
import { wrapper } from '@store/index';

interface Props {
  categories: Category[];
  productList: ProductResponsePaginatedList;
}

const Home: React.FC<Props> = () => {
  return <HeadComponent title="Welcome" />;
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<{ props: any }> => {
    const resCategories = await store.dispatch(
      categoryControllerGetAllCategories.initiate(),
    );
    const categories = resCategories.data;
    const resProductList = await store.dispatch(
      productControllerGetAllProducts.initiate({ pageNumber: 1, pageSize: 10 }),
    );

    const productList = resProductList.data;

    return {
      props: {
        categories: categories || [],
        productList: productList || {},
      },
    };
  },
);
