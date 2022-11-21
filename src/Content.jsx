import './Content.css';
import { ContentGrid } from './ContentGrid';
import { useDebounce } from './hooks/useDebounce';
import { useQuery } from './hooks/useQuery';

export const Content = () => {
  
  const query = useQuery();
  const search = query.get("search");

  const debouncedSearch = useDebounce(search, 300);

  return (
    // tip: passing key component reset its state
    <ContentGrid key={debouncedSearch} search={debouncedSearch} />
  );
};
