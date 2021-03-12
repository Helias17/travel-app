import React from 'react';
import Header from './js/components/Header/Header';
import Footer from './js/components/Footer/Footer';
import CountriesList from './js/components/CountriesList/CountriesList';

const App = (props) => {
  return (
    <>
      <Header />
      <main>
        <CountriesList />
      </main>
      <Footer />
    </>
  )
}

export default App;