import './Content.css';
import { ContentGrid } from "./ContentGrid";

export const Content = () => {
  return (
    <div>
      <header className='contentHeader'>
        <h1>Content</h1>
      </header>
      <main>
        <ContentGrid />
      </main>
    </div>
  );
};
