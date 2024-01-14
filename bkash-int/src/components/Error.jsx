

const Error = () => {
    const searchData = new URLSearchParams(window.location.search)
    const message = searchData.get('message')
    return (
        <div>
            <h1>payment {message}</h1>
        </div>
    );
};

export default Error;