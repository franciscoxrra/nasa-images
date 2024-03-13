
interface ErrorMessageProps {
    error: Error
}

export const ErrorMessage = ({
    error
}:ErrorMessageProps) => <div>{error.message}</div>;
