import { useDispatch, useSelector } from 'react-redux';
import { selectedFilter } from 'redux/contacts/filter/filter.selector';
import { setFilter } from '../../redux/contacts/filter/filter.slice';


export const Filter = () => {


  const dispatch = useDispatch();

  const value = useSelector(selectedFilter);
  const handleOnChange = event => {
    dispatch(setFilter(event.target.value));
  }

 
  
    return (
     
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Type to search..."
          value={value}
          name="filter"
          id= "search"
          onChange={handleOnChange}
        />

       
      
    );
  }
