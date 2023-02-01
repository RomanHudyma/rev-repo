import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState } from 'react';

import { Category } from '@services/baseApi';
import Layout from '@views/Layout';

interface HomeViewProps {
  categories: Category[];
}

const HomeView: React.FC<HomeViewProps> = ({ categories }) => {
  const [selectedCategory, setCategory] = useState<number | undefined>();

  const handleChange = (e: SelectChangeEvent<number>) => {
    setCategory(e.target.value as number);
  };

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
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              label="Age"
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
      <Grid container columns={4} />
    </Layout>
  );
};

export default HomeView;
