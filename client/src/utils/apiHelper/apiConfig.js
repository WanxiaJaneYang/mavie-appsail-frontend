// src/utils/apiConfig.js
class APIConfig {
	constructor() {
		this.isShare = false;
		this.shareCode = null;
	}

	setShare(isShare) {
		this.isShare = isShare;
	}

	getShare() {
		return this.isShare;
	}

	setShareCode(shareCode) {
		this.shareCode = shareCode;
	}

	getShareCode() {
		return this.shareCode;
	}
}

const apiConfig = new APIConfig();
export default apiConfig;
