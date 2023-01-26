import Header from "./header";
import MyFooter from "./MyFooter";

export default function Layout({ children }) {
    return (
      <>
        <Header/>
        <main>{children}</main>
        <MyFooter />
      </>
    )
  }