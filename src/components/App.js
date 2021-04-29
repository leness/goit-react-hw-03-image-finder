import { Component } from 'react';
import newsApi from '../services/news-api'
import Searchbar from './Searchbar'
import ImageGallery from './ImageGallery'
import Button from './Button'
import Modal from '../components/Modal'
import s from './App.module.css';
import Loader from "react-loader-spinner";


class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
    total: null,
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchHits();
    }
    this.scrollTo();
  }


  scrollTo = () => {
    window.scrollTo({
  top: document.documentElement.scrollHeight,
  behavior: 'smooth',
});
  }


  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
      total: null
    });
  }


  fetchHits = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    newsApi.fetchHits(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
          total: hits.total,
        }))
      }).catch( error => this.setState({ error }) )
      .finally(() => this.setState({ isLoading: false }));
    
  };


  getElem = (largeImageURL) => {
    this.setState({largeImageURL})
    this.toggleModal();
  }
  

  toggleModal = () => {
    this.setState(({showModal}) => ({
    showModal: !showModal
  }))
  }

  
  
  render() {
    const { showModal, isLoading, hits, error, largeImageURL, total} = this.state;
    const hitsLength = hits.length > 0 && hits.length < total;
    const shouldRenderLoadMoreButton = hitsLength > 0 && !isLoading;
   
    return (
      <div className={s.App}>
       {error && <h1 color="red">Sorry! Enter another request!!!</h1>}

        <Searchbar onSubmit={this.onChangeQuery} />

        {isLoading && <Loader />}
       
        {showModal &&
          <Modal onClose={this.toggleModal}>
          <img src={largeImageURL} alt='foto' />
          </Modal> }

        <ImageGallery hits={hits} onClick={this.getElem} />
        
        {shouldRenderLoadMoreButton && <Button onClick={this.fetchHits} />}
        
    </div>
    )
  }
}

export default App;
