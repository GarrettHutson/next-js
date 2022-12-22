// import Header from "../header/header-page"
// import Footer from "../footer/footer-page"

// export default function MainLayout({childern}){
//   return (
//    <>
// <Header />
// {childern}
// <Footer />
//    </>
//   )
// }


import React from 'react';
import  Footer  from '../footer/footer-page';
import  Header  from '../header/header-page';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;