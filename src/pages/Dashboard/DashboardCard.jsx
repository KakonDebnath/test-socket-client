
const DashboardCard = ({children, icon, handleSubmit}) => {
    return (

        <div className="min-h-[200px] flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-center rounded-2xl cursor-pointer hover:shadow-2xl transition-all">
            <p className="text-5xl text-white p-3">{icon}</p>
            <h2 className="text-3xl text-white">{children}</h2>
        </div>

    );
};

export default DashboardCard;