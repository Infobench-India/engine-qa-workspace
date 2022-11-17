import { Theme } from '@emotion/react';
import {
  makeStyles,
  createStyles,
  Autocomplete,
  Chip,
  TextField,
} from '@mui/material';
import React from 'react';

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: 500,
//       '& > * + *': {
//         marginTop: theme.spacing(3),
//       },
//     },
//   })
// );

interface User {
  id: number;
  name: string;
}

const userList: User[] = [
  { id: 1, name: 'name 1' },
  { id: 2, name: 'name 2' },
  { id: 3, name: 'name 3' },
  { id: 4, name: 'name 4' },
  { id: 5, name: 'name 5' },
];

export default function AutocompleteControlled() {
  //   const classes = useStyles();

  const [value, setValue] = React.useState<any>([userList[0].name]);

  console.log('value: ', value);

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={(event: any, newValue: any) => {
          setValue(newValue);
        }}
        multiple
        id="tags-filled"
        options={userList.map((option) => option.name)}
        freeSolo
        renderTags={(value: string[], getTagProps: any) =>
          value.map((option: string, index: number) => (
            <Chip
              variant="outlined"
              label={option}
              {...getTagProps({ index })}
            />
          ))
        }
        renderInput={(params: any) => (
          <TextField
            {...params}
            variant="filled"
            label="Users"
            placeholder="Search"
          />
        )}
      />
    </div>
  );
}
