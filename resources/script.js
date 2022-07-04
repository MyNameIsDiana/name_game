//Basic rules work -- DONE
//Need to clear form after user input -- DONE
//Need to check input for sneaky words that would turn into swear words
//Need to make sure input contains letters -- DONE

//Special cases:
//Name with hyphen; example: Jo-Anne
//Name with apostrophe; example: Renee'
//Name with space; example: Mary Beth (which also contains two special letters!)
//Name with periods; example: J.D.

//Add a tab with the rules of the Name Game
//Add a link to a video of the song, maybe? Link: https://www.youtube.com/watch?v=5MJLi5_dyn0

const fancyName = () => {
    //get first name from form
    const userInput = document.getElementById('firstName');
    const inputFirstName = userInput.value;

    const legitChars = /^[A-Za-z\s]*$/;
    if (!legitChars.test(inputFirstName)) {
        alert('Hmm ... that does not seem like a name.');
        userInput.value = '';
        return ;
    }
    if (inputFirstName.length === 0) {
        return ;
    }

    //capitalize first letter, lowercase the rest even if user didn't
    const firstNameFixCaps = inputFirstName.charAt(0).toUpperCase() + inputFirstName.slice(1).toLowerCase();
    //will alter it later; use let instead of const
    let alteredFirstName;
    //these may change depending on first charactter of name; use let instead of const
    let boB = 'bo-b';
    let foF = 'fo-f';
    let moM = 'mo-m';
    const vowels = 'AEIOUY';
    //alias for first character
    const firstChar = firstNameFixCaps[0];
    //if name starts with a vowel
    if (vowels.includes(firstChar)) {
        //keep first letter but lowercase it
        alteredFirstName = firstNameFixCaps.toLowerCase();
    } else {
        //use name as is
        alteredFirstName = firstNameFixCaps.slice(1)
    }
    //check for letters with special rules
    if (firstChar === 'B') {
        //alter this part to remove leading B
        boB = 'bo-';
    } else if (firstChar === 'F') {
        //alter this part to remove leading F
        foF = 'fo-';
    } else if (firstChar === 'M') {
        //alter this part to remove leading M
        moM = 'mo-';
    }  

    const lyrics = `${firstNameFixCaps}, ${firstNameFixCaps}, ${boB}${alteredFirstName}, <br>
    Banana-fana ${foF}${alteredFirstName}, <br>
    Fee-fi-${moM}${alteredFirstName}, <br>
    ${firstNameFixCaps}!`;
    console.log(lyrics);

    let result = document.getElementById('result');
    result.innerHTML = lyrics;
    userInput.value = '';
    

}