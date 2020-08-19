import React, { Component } from 'react';
import Fallback from './components/Fallback';

// Error boundaries currently have to be classes.
class ErrorBoundary extends Component<any, any> {
  state: any = { hasError: false, error: null };
  static getDerivedStateFromError(error: any): any {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    console.error(error, errorInfo);
  }

  render(): React.ReactElement | React.ReactNode {
    if (this.state.hasError) {
      return <Fallback />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
