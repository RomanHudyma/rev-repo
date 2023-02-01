import HeadComponent from '@components/common/Head';
import {
  productControllerGetAllProducts,
  categoryControllerGetAllCategories,
  ProductResponsePaginatedList,
  Category,
} from '@services/baseApi';
import { wrapper } from '@store/index';
import HomeView from '@views/HomeView';

interface Props {
  categories: Category[];
  productList: ProductResponsePaginatedList;
}

const Home: React.FC<Props> = ({ categories }) => {
  return (
    <>
      <HeadComponent title="Welcome" />
      <HomeView categories={categories} />
    </>
  );
};

export default Home;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (): Promise<{ props: any }> => {
    const resCategories = await store.dispatch(
      categoryControllerGetAllCategories.initiate(),
    );
    const categories = resCategories.data;
    const resProductList = await store.dispatch(
      productControllerGetAllProducts.initiate({ pageNumber: 1, pageSize: 12 }),
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
