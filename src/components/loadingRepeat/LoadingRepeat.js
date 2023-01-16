import CardAnime from "../cards/cardAnime/CardAnime";

function loadingRepeat({ number }) {
    const repeat = [];

    var i = 1;
    while (i <= number) {
        repeat.push(i);
        i++;
    }

    return (
        <>
            {repeat.map(index => (
                <CardAnime key={index} isLoading />
            ))}
        </>
    );
}

export default loadingRepeat;