import React, { useEffect, useState } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
	const [activePunk, setActivePunk] = useState(punkListData[0]);

	useEffect(() => {
		setActivePunk(punkListData[selectedPunk]);
	}, [selectedPunk]);

	return (
		<div className="main">
			<div className="mainContent">
				<div className="punkHighlight">
					<div className="punkContainer">
						<img
							src={activePunk.image_url}
							alt="activePunk"
							className="selectedPunk"
						/>
					</div>
				</div>

				<div className="punkDetails" style={{ color: "#fff" }}>
					<div className="title">
						{activePunk.name}
						<span className="itemNumber">
							&bull;#{activePunk.token_id}
						</span>
					</div>
					<div className="owner">
						<div className="ownerImageContainer">
							<img
								src={activePunk.owner.profile_img_url}
								alt="profile_image"
							/>
						</div>
						<div className="ownerDetails">
							<div className="ownerNameandHandle">
								<div className="ownerAddress">
									{activePunk.owner.address}
								</div>
								<div className="ownerHandle">
									<a
										href={
											"https://testnets.opensea.io/" +
											activePunk.owner.address
										}
										target="_blank"
										rel="noopener noreferrer"
									>
										@
										{activePunk.owner.user
											? activePunk.owner.user.username
											: "UnknowUser"}
									</a>
								</div>
							</div>

							<a
								href="https://instagram.com/khomohzie"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="ownerLink">
									<img
										src={instagramLogo}
										alt="instagramLogo"
									/>
								</div>
							</a>

							<a
								href="https://twitter.com/daniekomo"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="ownerLink">
									<img src={twitterLogo} alt="twitterLogo" />
								</div>
							</a>

							<a
								href={activePunk.permalink}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="ownerLink">
									<img src={moreIcon} alt="moreIcon" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
