

const CardBtn = ({children, style, handleClickBtn, isDisabled}) => {
    // console.log(isDisabled);
    return (
            <button onClick={handleClickBtn} className={`bg-gradient-to-b text-white px-5 py-2 rounded-xl ${style} transition-all hover:from-blue-500 hover:to-cyan-500`} disabled={isDisabled}>{children}</button>

    );
};

export default CardBtn;