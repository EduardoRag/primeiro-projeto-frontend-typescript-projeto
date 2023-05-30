function useAuth() {
    const handleAddToken = (token: string) => {
        localStorage.setItem('token', token);
    }

    const handleClearToken = () => {
        localStorage.removeItem('token');
    }

    const handleGetToken = (): string | null => {
        return localStorage.getItem('token');
    }


    return {
        handleAddToken,
        handleClearToken,
        handleGetToken
    }
}

export default useAuth;