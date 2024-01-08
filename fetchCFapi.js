fetch(`https://codeforces.com/api/user.info?handles=Ahmet_Emre`)
	.then(response => response.json())
	.then(json => {
		const rating = json.result[0].rating;
		let leftUntilNext;
		let nextRank;
		const ratingContainer = document.getElementById('rating-value');
		const nextRemainCont = document.getElementById('remaining-rating');
		const nextRankCont = document.getElementById('next-rank');
		if(rating < 1200) {
			leftUntilNext = 1200 - rating;
			nextRank = "Pupil";
			ratingContainer.classList.add('newbie');
			nextRankCont.classList.add('pupil');
		}
		else if (rating < 1400) {
			leftUntilNext = 1400 - rating;
			nextRank = "Specialist";
			ratingContainer.classList.add('pupil');
			nextRankCont.classList.add('specialist');
		}
		else if(rating < 1600) {
			leftUntilNext = 1600 - rating;
			nextRank = "Expert";
			ratingContainer.classList.add('specialist');
			nextRankCont.classList.add('expert');
		}
		else if(rating < 1900) {
			leftUntilNext = 1900 - rating;
			nextRank = "Candidate Master";
			ratingContainer.classList.add('expert');
			nextRankCont.classList.add('candidateMaster');
		}
		else if(rating < 2100) {
			leftUntilNext = 2100 - rating;
			nextRank = "Master";
			ratingContainer.classList.add('candidateMaster');
			nextRankCont.classList.add('master');
		}
		else if(rating < 2300) {
			leftUntilNext = 2300 - rating;
			nextRank = "International Master";
			ratingContainer.classList.add('master');
			nextRankCont.classList.add('master');
		}
		else if(rating < 2400) {
			leftUntilNext = 2400 - rating;
			nextRank = "Grandmaster";
			ratingContainer.classList.add('master');
			nextRankCont.classList.add('grandmaster');
		}
		else if(rating < 2600) {
			leftUntilNext = 2600 - rating;
			nextRank = "International Grandmaster";
			ratingContainer.classList.add('grandmaster');
			nextRankCont.classList.add('grandmaster');
		}
		else if(rating < 3000) {
			leftUntilNext = 3000 - rating;
			nextRank = "Legendary Grandmaster";
			ratingContainer.classList.add('grandmaster');
			nextRankCont.classList.add('grandmaster');
		}
		else {
			leftUntilNext = 0;
			nextRank = "You are already the best";
			ratingContainer.classList.add('grandmaster');
			nextRankCont.classList.add('grandmaster');
			nextRankCont.classList.add('legendaryGrandmaster');
			ratingContainer.classList.add('legendaryGrandmaster');
		}
		ratingContainer.textContent = rating;
		nextRemainCont.textContent = leftUntilNext;
		nextRankCont.textContent = nextRank;
	}
)
