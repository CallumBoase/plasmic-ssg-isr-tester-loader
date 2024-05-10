import type { AppProps } from 'next/app';

// Import the styles for RenderMarkdown globally
import '../components/RenderMarkdown/light-theme/code-block-styles.css';
import '../components/RenderMarkdown/light-theme/github-flavored-markdown.css';
import '../components/RenderMarkdown/light-theme/copy-code-button-styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;