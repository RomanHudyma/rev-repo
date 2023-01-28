import baseApi from './emptyApi';
const injectedRtkApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    categoryControllerGetAllCategories: build.query<
      CategoryControllerGetAllCategoriesApiResponse,
      CategoryControllerGetAllCategoriesApiArg
    >({
      query: () => ({ url: `/api/v1/categories` }),
    }),
    categoryControllerPostCategory: build.mutation<
      CategoryControllerPostCategoryApiResponse,
      CategoryControllerPostCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/categories`,
        method: 'POST',
        body: queryArg.body,
      }),
    }),
    categoryControllerPutCategory: build.mutation<
      CategoryControllerPutCategoryApiResponse,
      CategoryControllerPutCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/categories/category`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    categoryControllerDeleteCategory: build.mutation<
      CategoryControllerDeleteCategoryApiResponse,
      CategoryControllerDeleteCategoryApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/categories/category`,
        method: 'DELETE',
      }),
    }),
    identityControllerPostLogin: build.mutation<
      IdentityControllerPostLoginApiResponse,
      IdentityControllerPostLoginApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/identity/signin`,
        method: 'POST',
        body: queryArg.userLoginRequest,
      }),
    }),
    identityControllerPostRegister: build.mutation<
      IdentityControllerPostRegisterApiResponse,
      IdentityControllerPostRegisterApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/identity/signup`,
        method: 'POST',
        body: queryArg.userRegistrationRequest,
      }),
    }),
    identityControllerPostRefreshToken: build.mutation<
      IdentityControllerPostRefreshTokenApiResponse,
      IdentityControllerPostRefreshTokenApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/identity/refreshtoken`,
        method: 'POST',
        body: queryArg.refreshTokenRequest,
      }),
    }),
    orderControllerGetAllOrders: build.query<
      OrderControllerGetAllOrdersApiResponse,
      OrderControllerGetAllOrdersApiArg
    >({
      query: () => ({ url: `/api/v1/orders` }),
    }),
    orderControllerPostOrder: build.mutation<
      OrderControllerPostOrderApiResponse,
      OrderControllerPostOrderApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/orders`,
        method: 'POST',
        body: queryArg.createOrderRequest,
      }),
    }),
    photoControllerGetAllPhotos: build.query<
      PhotoControllerGetAllPhotosApiResponse,
      PhotoControllerGetAllPhotosApiArg
    >({
      query: () => ({ url: `/api/v1/photos` }),
    }),
    productControllerGetAllProducts: build.query<
      ProductControllerGetAllProductsApiResponse,
      ProductControllerGetAllProductsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/products`,
        params: {
          Search: queryArg.search,
          CategoryId: queryArg.categoryId,
          PageNumber: queryArg.pageNumber,
          PageSize: queryArg.pageSize,
        },
      }),
    }),
    productControllerGetProduct: build.query<
      ProductControllerGetProductApiResponse,
      ProductControllerGetProductApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/products/${queryArg.id}` }),
    }),
    productControllerDeleteProduct: build.mutation<
      ProductControllerDeleteProductApiResponse,
      ProductControllerDeleteProductApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/products/${queryArg.id}`,
        method: 'DELETE',
      }),
    }),
    productControllerPostProduct: build.mutation<
      ProductControllerPostProductApiResponse,
      ProductControllerPostProductApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/products/product`,
        method: 'POST',
        body: queryArg.createProductRequest,
      }),
    }),
    productControllerPutProduct: build.mutation<
      ProductControllerPutProductApiResponse,
      ProductControllerPutProductApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/products/product`,
        method: 'PUT',
        body: queryArg.updateProductRequest,
      }),
    }),
    productControllerPutProductImage: build.mutation<
      ProductControllerPutProductImageApiResponse,
      ProductControllerPutProductImageApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/products/${queryArg.id}/image`,
        method: 'PUT',
        body: queryArg.body,
      }),
    }),
    sampleControllerGetHello: build.query<
      SampleControllerGetHelloApiResponse,
      SampleControllerGetHelloApiArg
    >({
      query: () => ({ url: `/api/Sample` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as baseApi };
export type CategoryControllerGetAllCategoriesApiResponse =
  /** status 200 Returns list of categories */ Category[];
export type CategoryControllerGetAllCategoriesApiArg = void;
export type CategoryControllerPostCategoryApiResponse =
  /** status 200 Success */ Category;
export type CategoryControllerPostCategoryApiArg = {
  body: {
    Name?: string;
    Image?: Blob;
  };
};
export type CategoryControllerPutCategoryApiResponse =
  /** status 200 Success */ CreatedCategory;
export type CategoryControllerPutCategoryApiArg = {
  body: {
    Id?: number;
    Name?: string;
    Image?: Blob;
  };
};
export type CategoryControllerDeleteCategoryApiResponse = unknown;
export type CategoryControllerDeleteCategoryApiArg = {
  id: number;
};
export type IdentityControllerPostLoginApiResponse =
  /** status 200 Returns user's data and generated JWT Token */ AuthSuccessResponse;
export type IdentityControllerPostLoginApiArg = {
  userLoginRequest: UserLoginRequest;
};
export type IdentityControllerPostRegisterApiResponse =
  /** status 200 Returns user's data and generated JWT Token */ AuthSuccessResponse;
export type IdentityControllerPostRegisterApiArg = {
  userRegistrationRequest: UserRegistrationRequest;
};
export type IdentityControllerPostRefreshTokenApiResponse = unknown;
export type IdentityControllerPostRefreshTokenApiArg = {
  refreshTokenRequest: RefreshTokenRequest;
};
export type OrderControllerGetAllOrdersApiResponse =
  /** status 200 Returns list of user's orders */ OrderBriefResponse[];
export type OrderControllerGetAllOrdersApiArg = void;
export type OrderControllerPostOrderApiResponse =
  /** status 200 Returns created order info */ OrderBriefResponse;
export type OrderControllerPostOrderApiArg = {
  createOrderRequest: CreateOrderRequest;
};
export type PhotoControllerGetAllPhotosApiResponse =
  /** status 200 Returns list of images for carousel */ Photo[];
export type PhotoControllerGetAllPhotosApiArg = void;
export type ProductControllerGetAllProductsApiResponse =
  /** status 200 Returns list of products and pagination info */ ProductResponsePaginatedList;
export type ProductControllerGetAllProductsApiArg = {
  search?: string;
  categoryId?: number;
  pageNumber?: number;
  pageSize?: number;
};
export type ProductControllerGetProductApiResponse =
  /** status 200 Success */ ProductResponse;
export type ProductControllerGetProductApiArg = {
  id: number;
};
export type ProductControllerDeleteProductApiResponse = unknown;
export type ProductControllerDeleteProductApiArg = {
  id: number;
};
export type ProductControllerPostProductApiResponse =
  /** status 200 Success */ ProductResponse;
export type ProductControllerPostProductApiArg = {
  createProductRequest: CreateProductRequest;
};
export type ProductControllerPutProductApiResponse =
  /** status 200 Success */ ProductResponse;
export type ProductControllerPutProductApiArg = {
  updateProductRequest: UpdateProductRequest;
};
export type ProductControllerPutProductImageApiResponse =
  /** status 200 Success */ ProductResponse;
export type ProductControllerPutProductImageApiArg = {
  id: number;
  body: {
    Image?: Blob;
  };
};
export type SampleControllerGetHelloApiResponse = unknown;
export type SampleControllerGetHelloApiArg = void;
export type Category = {
  id?: number;
  name?: string | null;
  imageURL?: string | null;
};
export type CreatedCategory = {
  id?: number;
  name?: string | null;
  imageUrl?: string | null;
};
export type AuthSuccessResponse = {
  token?: string | null;
  refreshToken?: string | null;
  tokenExpiryTime?: string;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  avatarUrl?: string | null;
};
export type UserLoginRequest = {
  email: string;
  password: string;
};
export type UserRegistrationRequest = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};
export type RefreshTokenRequest = {
  token: string;
  refreshToken: string;
};
export type OrderBriefResponse = {
  id?: number;
  onDate?: string;
  totalCost?: number;
};
export type OrderProductDto = {
  quantity?: number;
  productId?: number;
};
export type CreateOrderRequest = {
  orderProducts?: OrderProductDto[] | null;
};
export type Photo = {
  id?: number;
  imageURL?: string | null;
};
export type ProductResponse = {
  id: number;
  name: string;
  price: number;
  description?: string | null;
  soldCount: number;
  imageURL: string;
  detailsPictureURLPrimary?: string | null;
  detailsPictureURLSecondary?: string[] | null;
  detailsTextPrimary?: string | null;
  detailsTextSecondary?: string | null;
};
export type ProductResponsePaginatedList = {
  items?: ProductResponse[] | null;
  pageNumber?: number;
  totalPages?: number;
  totalCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
};
export type CreateProductRequest = {
  name?: string | null;
  price?: number;
  description?: string | null;
  categoryId?: number;
};
export type UpdateProductRequest = {
  id?: number;
  name?: string | null;
  price?: number;
  description?: string | null;
  extraInformation?: string | null;
  categoryId?: number;
};
export const {
  useCategoryControllerGetAllCategoriesQuery,
  useCategoryControllerPostCategoryMutation,
  useCategoryControllerPutCategoryMutation,
  useCategoryControllerDeleteCategoryMutation,
  useIdentityControllerPostLoginMutation,
  useIdentityControllerPostRegisterMutation,
  useIdentityControllerPostRefreshTokenMutation,
  useOrderControllerGetAllOrdersQuery,
  useOrderControllerPostOrderMutation,
  usePhotoControllerGetAllPhotosQuery,
  useProductControllerGetAllProductsQuery,
  useProductControllerGetProductQuery,
  useProductControllerDeleteProductMutation,
  useProductControllerPostProductMutation,
  useProductControllerPutProductMutation,
  useProductControllerPutProductImageMutation,
  useSampleControllerGetHelloQuery,
} = injectedRtkApi;

export const {
  productControllerGetAllProducts,
  categoryControllerGetAllCategories,
} = injectedRtkApi.endpoints;
