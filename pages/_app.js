import { AuthProvider } from "../lib/auth";

const App = ({ Component, pageProps }) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
};
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
