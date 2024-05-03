import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import axios from 'axios';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import { redirect, useRouter } from 'next/navigation';

const filter = createFilterOptions();

const CompareCarModel = ({ model, carId }) => {
  const router = useRouter();
  const [carName, setCarName] = useState({ name: null, id: null });
  const [cardata, setCarData] = useState([]);
  const carData = async () => {
    const response = await axios.get(`/api/getCar`);
    const data = response.data;
    setCarData(data);
  };
  const redirectToComparisonPage = (carId, carNameId) => {
    router.push(`/comparecar/${carId}/${carNameId}`);
  };
  const compareRoute = <Link href=""></Link>;
  useEffect(() => {
    carData();
    if (carName.id) {
      redirectToComparisonPage(carId, carName.id);
    }
  }, [carName.id]);
  console.log(model, carId);
  const handleClick = () => {};
  console.log(carId, carName.id);
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
          <li
            // href="#"
            // href={`/comparecar/${carId}/${option.id}`}
            // onClick={handleClick}
            key={props.id}
            {...props}
          >
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
