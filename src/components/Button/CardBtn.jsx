

const CardBtn = ({children, style, handleClickBtn}) => {
    return (
            <button 
            // disabled={isSelected.status === "selected"}
            onClick={handleClickBtn} 
            className={`bg-gradient-to-b text-white px-5 py-2 rounded-xl ${style} transition-all hover:from-blue-500 hover:to-cyan-500`} >{children}</button>

    );
};

export default CardBtn;