import WithJobFilter from './WithJobFilter';
import CategoryFilter from './CategoryFilter';
import JobFilterRadioInput from './JobFilterRadioInput';

//Others
import './HOCJobFilter.scss';

export const CategoryJobFilter = WithJobFilter(CategoryFilter);
export const PriceJobFilter = WithJobFilter(JobFilterRadioInput);
export const SellerRateFilter = WithJobFilter(JobFilterRadioInput);
