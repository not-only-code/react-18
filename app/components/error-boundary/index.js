import React from 'react';

export const ErrorComponent = ({ message }) => (
  <section className="error-boundary">
    <h2>Some error happened</h2>
    <pre>{message}</pre>
  </section>
)


// Error boundaries currently have to be classes.
class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    const { fallback, children } = this.props
    const { error } = this.state;

    if (error) return fallback || <ErrorComponent message={error.message} />;

    return children;
  }
}

export default ErrorBoundary;