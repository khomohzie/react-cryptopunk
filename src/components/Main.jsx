import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = () => {
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
										{activePunk.user?.username
											? activePunk.user.username
											: "UnknowUser"}
									</a>
								</div>
							</div>
							<div className="ownerLink">
								<img src={instagramLogo} alt="instagramLogo" />
							</div>
							<div className="ownerLink">
								<img src={twitterLogo} alt="twitterLogo" />
							</div>
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
