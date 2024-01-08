fetch(`https://codeforces.com/api/user.info?handles=Ahmet_Emre`)
	.then(response => response.json())
	.then(json => {
		const rating = json.result[0].rating;
		let leftUntilNext;
		let nextRank;
		let nextRankClass;
		let curRankClass;
		const ratingContainer = document.getElementById('rating-value');
		const nextRemainCont = document.getElementById('remaining-rating');
		const nextRankCont = document.getElementById('next-rank');
		const nameCont = document.getElementById('name');
		if(rating < 1200) {
			leftUntilNext = 1200 - rating;
			nextRank = "Pupil";
			curRankClass = 'newbie';
			nextRankClass = 'pupil';
		}
		else if (rating < 1400) {
			leftUntilNext = 1400 - rating;
			nextRank = "Specialist";
			curRankClass = 'pupil';
			nextRankClass = 'specialist';
		}
		else if(rating < 1600) {
			leftUntilNext = 1600 - rating;
			nextRank = "Expert";
			curRankClass = 'specialist';
			nextRankClass = 'expert';
		}
		else if(rating < 1900) {
			leftUntilNext = 1900 - rating;
			nextRank = "Candidate Master";
			curRankClass = 'expert';
			nextRankClass = 'candidateMaster';
		}
		else if(rating < 2100) {
			leftUntilNext = 2100 - rating;
			nextRank = "Master";
			curRankClass = 'candidateMaster';
			nextRankClass = 'master';
		}
		else if(rating < 2300) {
			leftUntilNext = 2300 - rating;
			nextRank = "International Master";
			curRankClass = 'master';
			nextRankClass = 'master';
		}
		else if(rating < 2400) {
			leftUntilNext = 2400 - rating;
			nextRank = "Grandmaster";
			curRankClass = 'master';
			nextRankClass = 'grandmaster';
		}
		else if(rating < 2600) {
			leftUntilNext = 2600 - rating;
			nextRank = "International Grandmaster";
			curRankClass = 'grandmaster';
			nextRankClass = 'grandmaster';
		}
		else if(rating < 3000) {
			leftUntilNext = 3000 - rating;
			nextRank = "Legendary Grandmaster";
			curRankClass = 'grandmaster';
			nextRankClass = 'grandmaster';
		}
		else {
			leftUntilNext = 0;
			nextRank = "You are already the best";
			nextRankClass = 'legendaryGrandmaster';
			curRankClass = 'legendaryGrandmaster';
		}
		ratingContainer.textContent = rating;
		nextRemainCont.textContent = leftUntilNext;
		nextRankCont.textContent = nextRank;
		nextRankCont.classList.add(nextRankClass);
		ratingContainer.classList.add(curRankClass);
		nameCont.classList.add(curRankClass);
	}
)
