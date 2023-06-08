import useClasses from "../../../hooks/useClasses";
import MyClassesCard from "./MyClassesCard";


const MyClasses = () => {
    const [classes] = useClasses();
    return (
        <MyClassesCard classes={classes}></MyClassesCard>
    );
};

export default MyClasses;