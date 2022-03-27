import React from "react";
import CollectionCard from "./CollectionCard";
import "./PunkList.css";

const PunkList = ({ punkListData, setSelectedPunk }) => {
	return (
		<div className="punkList">
			{punkListData
				.sort((a, b) => (a.token_id > b.token_id ? 1 : -1))
				.map((punk) => (
					<div
						key={punk.token_id}
						onClick={() => {
							setSelectedPunk(punk.token_id);
							console.log(punk.token_id);
						}}
					>
						<CollectionCard
							id={punk.token_id}
							name={punk.name}
							traits={punk.traits}
							image={punk.image_url}
						/>
					</div>
				))}
		</div>
	);
};

export default PunkList;
