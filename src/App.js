import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import image from "./assets/punks/3.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import PunkList from "./components/PunkList";
import { keepTheme } from "./utils/themes";

function App() {
	const [punkListData, setPunkListData] = useState([]);

	useEffect(() => {
		const getMyNfts = async () => {
			const openseaData = await axios.get(
				"https://testnets-api.opensea.io/assets?asset_contract_address=0xB3dEA04A226208Bf503Ce3F4B7E57cfb059f9359&order_direction=asc"
			);

			setPunkListData(openseaData.data.assets);
		};

		return getMyNfts();
	}, [punkListData]);

	useEffect(() => {
		keepTheme();
	});

	return (
		<div className="App">
			<Header />

			<PunkList punkListData={punkListData} />
		</div>
	);
}

export default App;
