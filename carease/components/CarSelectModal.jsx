import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios';

import { useRouter } from 'next/navigation';

const filter = createFilterOptions();

const CompareCarModel = ({ model, carId }) => {
  const router = useRouter();
  const [carName, setCarName] = useState({ name: null, id: null });
  const [cardata, setCarData] = useState([]);
  const carData = async () => {
    const response = await axios.get(`/api/getCar`);
    const data = response.data;
    const filterdata = data.filter((item) => item.model !== model);

    setCarData(filterdata);
  };
  const redirectToComparisonPage = (carId, carNameId) => {
    router.push(`/comparecar/${carId}/${carNameId}`);
  };

  useEffect(() => {
    carData();

    if (carName.name === model) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
    if (carName.id && !(carName.name === model)) {
      redirectToComparisonPage(carId, carName.id);
    }
  }, [carName.id]);

  return (

    <div className="absolute w-[60%] right-0 bottom-[-1rem] lg:bottom-0 border-none bg-white rounded-full  text-white outline-none ">
      <Autocomplete
        sx={{
          '& .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root': {
            borderRadius: '100px',
            padding: '4px 1px 8px 0',
          },
          '& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused': {
            color: 'black',
          },
          '& .css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline, .css-1d3z3hw-MuiOutlinedInput-notchedOutline ,.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
            {
              borderRadius: '100px',
              borderColor: '#F14021',
            },
        }}
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
            <li key={props.id} {...props}>
              {option.model}
            </li>
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
};
export default CompareCarModel;
