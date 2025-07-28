import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Leftbar from "../Navbar/Leftbar";

const Dashboard = () => {
   
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <div className="col-span-4 justify-center ">
                    <Leftbar></Leftbar>
                </div>
                <div className="col-span-8 justify-center">
                    <Outlet>Outlate</Outlet>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;