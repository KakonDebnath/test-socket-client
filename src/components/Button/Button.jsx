

const Button = ({children}) => {
    return (
        <button className="bg-yellow-600 px-7 py-3 text-white rounded-3xl text-xl hover:shadow-2xl"> {children}</button>
    );
};

export default Button;