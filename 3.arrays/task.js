function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, i) => item === arr2[i]);

}

function getUsersNamesInAgeRange(people, gender) {
	if (people.length === 0) {
		return 0;
	}

	if (gender !== "мужской" && gender !== "женский") {
		return 0;
	}

	let result = people.filter((user) => user.gender === gender).reduce((acc, user) => acc + user.age, 0) / people.filter((user) => user.gender === gender).length;

	return result;
}