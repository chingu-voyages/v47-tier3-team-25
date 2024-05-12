import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios';
import Link from 'next/link';

const filter = createFilterOptions();

export default function CompareCarModel({ carId }) {
  const [carName, setCarName] = React.useState({ name: null, id: null });
  const [cardata, setCarData] = React.useState([]);

  const carData = async () => {
    const response = await axios.get(`/api/getCar`);
    const data = response.data;
    setCarData(data);
  };
  React.useEffect(() => {
    carData();
  }, []);

  return (
    <div className="absolute w-[60%] right-0 bottom-[-1rem] border-2 bg-white border-primary border-t-0 rounded-lg text-white outline-none">
      <Autocomplete
        value={carName.name}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setValue(newValue);
          } else if (newValue && newValue.inputValue) {
            setValue(newValue.inputValue);
          } else {
            setCarName({ name: newValue?.model, id: newValue?.id });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          const { inputValue } = params;

          const isExisting = options.some(
            (option) => inputValue === option.model
          );

          if (inputValue !== '' && !isExisting) {
            filtered.push({
              inputValue,
              title: `Add "${inputValue}"`,
            });
          }

          return filtered;
        }}
        renderOption={(props, option) => (
          <Link href={`/comparecar`} key={props.id} {...props}>
            {option.model}
          </Link>
        )}
        options={cardata}
        getOptionLabel={(option) => {
          if (typeof option === 'string') {
            return option;
          } else if (option.model && option.inputValue) {
            return option.inputValue;
          } else {
            return option.model;
          }
        }}
        renderInput={(params) => (
          <TextField {...params} label="Select a car to compare" />
        )}
        freeSolo
      />
    </div>
  );
}
