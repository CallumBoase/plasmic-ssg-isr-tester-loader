import type { AppProps } from 'next/app';

// Import the styles for RenderMarkdown globally
import 'plasmic-render-markdown/dist/assets/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;