import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Copyright: React.FC<{ sx: object }> = ({ sx }) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={sx}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Rev Repo
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
};

export default Copyright;
