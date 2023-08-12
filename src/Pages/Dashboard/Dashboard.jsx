import userImage from "../../assets/jahangir.jpeg"
import logo2 from "../../assets/logo.png"

const Dashboard = () => {
    return (
        <div className=' h-full'>
            <div className="flex items-center justify-evenly h-full text-white ">
                <div className="border bg-black bg-opacity-50 p-10 rounded-[10px] text-center space-y-2">
                    <img src={userImage} className="w-80 h-80 rounded-full  object-fill border-gray-800 border-2" alt="userimage2" />
                    <h4 className="text-2xl font-bold">JAHANGIR HOSSAIN <br />
                        MOZUMDER TIPU</h4>
                    <p>MANAGING DIRECTOR</p>
                </div>
                <div className="text-[16px] text-center flex items-center justify-center flex-col gap-4">
                    <img src={logo2} className="w-40" alt="" />
                    <div>
                        <h4 className="text-gradient font-semibold">JAHOSS GROUP LIMITED</h4>
                        <p>ADDRESS: SUITE: 22/7/8 (21ST FLOOR), WEST CHINA TOWN, 67/1, NAYA PALTAN, DHAKA-1000 <br />
                            OUR SISTER CONCERNS</p>
                    </div>
                    <div>
                        <h4 className="text-gradient font-semibold">JAHOSS ENTERPRISE LIMITED</h4>
                        <p>GOVT. APPROVED RECRUTING LICENSE NO. RL-2177</p>
                    </div>
                    <div>
                        <h4 className="text-red-800 text-2xl font-semibold">JAHOSS TOURS & TRAVELS</h4>
                        <p>GOVT. APPROVED TRAVEL AGENCY</p>
                    </div>
                    <div>
                        <h4 className="text-purple-800-800 text-2xl font-semibold">JAHOSS TRADE INTERNATIONAL</h4>
                        <p>EXPORT, IMPORT & SUPPLIER</p>
                    </div>
                    <div>
                        <h4 className="text-red-950 text-2xl font-semibold">JAHOSS EURO ENTERPRISE.SRL</h4>
                        <p>TRADE REGISTER: J40/6433/2022 <br />
                            LABOR SUPPLY & MANAGEMENT SERVICES</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;