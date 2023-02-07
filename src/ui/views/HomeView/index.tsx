import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState, useMemo } from 'react';

import {
  Category,
  ProductResponsePaginatedList,
  useProductControllerGetAllProductsQuery as useProducts,
} from '@services/baseApi';
import Layout from '@views/Layout';

interface HomeViewProps {
  categories: Category[];
  productsList: ProductResponsePaginatedList;
}

const HomeView: React.FC<HomeViewProps> = ({ categories, productsList }) => {
  const [selectedCategory, setCategory] = useState<number | undefined>(
    categories?.[0]?.id,
  );
  const [page, setPage] = useState<number>(1);
  const { data } = useProducts(
    {
      pageNumber: page,
      pageSize: 12,
      categoryId: selectedCategory,
    },
    {
      skip:
        (selectedCategory === undefined ||
          selectedCategory === categories?.[0]?.id) &&
        page === 1,
    },
  );

  const handleChange = (e: SelectChangeEvent<number>) => {
    setCategory(e.target.value as number);
  };

  const productsData = useMemo(
    () =>
      (selectedCategory === undefined ||
        selectedCategory === categories?.[0]?.id) &&
      page === 1
        ? productsList
        : data,
    [page, selectedCategory, categories, productsList, data],
  );

  return (
    <Layout>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Grid item sx={{ minWidth: '200px' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              label="Category"
              onChange={handleChange}
            >
              {categories?.map((c) => (
                <MenuItem value={c.id} key={c.id}>
                  {c.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        columns={12}
        alignItems="center"
        justifyContent="center"
        sx={{ paddingY: '3rem' }}
      >
        {productsData?.items?.map((item) => (
          <Grid
            item
            key={item.id}
            xs={3}
            sx={{ paddingBottom: '1.5rem', paddingX: '1.5rem' }}
          >
            {item.name}
          </Grid>
        ))}
      </Grid>
      {productsData?.totalPages > 1 && (
        <Grid container direction="row" justifyContent="center">
          <Pagination
            variant="outlined"
            onChange={(e, p) => setPage(p)}
            count={productsData?.totalPages}
            hideNextButton={page === productsData?.totalPages}
            hidePrevButton={page === 1}
          />
        </Grid>
      )}
    </Layout>
  );
};

export default HomeView;
