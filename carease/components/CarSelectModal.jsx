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
  const [error, setError] = useState(false);
  const carData = async () => {
    const response = await axios.get(`/api/getCar`);
    const data = response.data;
    setCarData(data);
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
    <>
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
      {error && (
        <div className="absolute bottom-12 right-4 px-4 py-1 rounded-lg  mt-5 bg-rose-700 border-gray-400 border-2 text-white">
          select a different car
        </div>
      )}
    </>
  );
};
export default CompareCarModel;
