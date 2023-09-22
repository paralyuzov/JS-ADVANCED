function constructionCrew(data) {

    if (data.dizziness) {
        data.levelOfHydrated += (0.1 * data.weight) * data.experience;
        data.dizziness = false;
    }

    return data;

}
console.log(constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}))