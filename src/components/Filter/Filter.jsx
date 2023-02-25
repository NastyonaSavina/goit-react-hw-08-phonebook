import { useDispatch, useSelector } from 'react-redux';
import { selectedFilter } from 'redux/contacts/contacts/contacts.selectors';
import { setFilter } from '../../redux/contacts/filter/filter.slice';


export const Filter = () => {


  const dispatch = useDispatch();
  const filter = useSelector(selectedFilter);
  const handleOnChange = e => dispatch(setFilter(e.target.value));

  
    return (
      <form
        action="#"
        className="input-group mb-3"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Type to search..."
          value={filter}
          onChange={handleOnChange}
        />

        {/* <button type="submit" className="btn btn-primary">
          Search
        </button> */}
      </form>
    );
  }
