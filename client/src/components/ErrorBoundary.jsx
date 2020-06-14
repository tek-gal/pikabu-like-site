import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    componentDidCatch(error, info) {
        this.setState({ error, info })
    }

    render() {
        const { hasError } = this.state;

        if (hasError) {
            return <p>Что-то пошло нет так попробуйте снова</p>;
        }

        return this.props.children;
    }
}


export default ErrorBoundary;
