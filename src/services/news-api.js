import axios from 'axios';

const fetchHits = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `https://pixabay.com/api/?key=20760702-5249c5293b61b59f393da4efc&q=${searchQuery}&image_type=photo&orientation=horizontal&per_page=12&page=${currentPage}`
        )
        .then(response => response.data.hits);
};

export default { fetchHits };
