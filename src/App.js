import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import PunkList from "./components/PunkList";
import Main from "./components/Main";
import { keepTheme } from "./utils/themes";

function App() {
	const [punkListData, setPunkListData] = useState([]);
	const [selectedPunk, setSelectedPunk] = useState(0);

	useEffect(() => {
		const getMyNfts = async () => {
			const openseaData = await axios.get(
				"https://rinkeby-api.opensea.io/api/v1/assets?asset_contract_address=0xB3dEA04A226208Bf503Ce3F4B7E57cfb059f9359&order_direction=asc"
			);

			setPunkListData(openseaData.data.assets);
		};

		return getMyNfts();
	}, []);

	useEffect(() => {
		keepTheme();
	});

	return (
		<div className="App">
			<Header />

			{punkListData?.length > 0 ? (
				<>
					<Main
						punkListData={punkListData}
						selectedPunk={selectedPunk}
					/>

					<PunkList
						punkListData={punkListData}
						setSelectedPunk={setSelectedPunk}
					/>
				</>
			) : (
				<h1
					style={{
						color: "var(--header-items)",
						display: "flex",
						justifyContent: "center",
					}}
				>
					Getting NFT Collection...
				</h1>
			)}
		</div>
	);
}

export default App;
