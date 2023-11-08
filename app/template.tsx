import Footer from "_components/Footer";
import Header from "_components/Header";
import { Children } from "_types";
import React from "react";

type Props = Children;
export default function template(props: Props) {
  /***Colors
   * teal #0CA0A2
   * purple #8239F8
   * black #011627
   * text-1 #626E94
   * text-2 ##7B7F8C
   * orange #FF9F1C
   * background #F5F8FC
   * hover-background purple/10
   * white
   */
  /*** fonts **
   * text-size = 14 , 16, 18, 20
   * heading-size = 46, 40, 34, 32, 30, 26, 24, 20, 18
   * weight = 300, 400, 500, 600, 700, 800, 900
   * colors = black #011627, text #626E94, orange #FF9F1C, teal #0CA0A2, white
   * line-height = 41, 40, 32,
   */

  /*** Template Page **
   * header
   * ---------
   * other pages
   * ---------
   * footer
   */

  const { children } = props;
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
