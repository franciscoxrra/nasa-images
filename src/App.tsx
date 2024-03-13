import "./index.css";

import { useSearchImages } from "./requesters/searchImages";
import { Loading } from "./components/Loading";
import { ImageGallery } from "./components/ImageGallery";
import {SearchForm} from "./components/SearchForm";
import {ErrorMessage} from "./components/ErrorMessage";

export default function App() {
  const { searchForExpression, images, isLoading, error } = useSearchImages();

  return (
      <div className="App">
        <h1>NASA Images</h1>
        <SearchForm searchForExpression={searchForExpression} />
        {error && <ErrorMessage error={error} />}
        {isLoading ? (
            <Loading />
        ) : images ? (
            <ImageGallery images={images} />
        ) : (
            "Type anything in the search field"
        )}
      </div>
  );
}
