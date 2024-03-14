import Sidebar from "../../Components/sidebar/Sidebar";
import Conversations from "../../Components/sidebar/Conversations";
import MessageContainer from "../../Components/messages/MessageContainer";
const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer/>
            {/* <LogoutButton/>  */}
		</div>
	);
};
export default Home;