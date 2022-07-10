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
const ruleDetails = `<p>You can sing "The Name Game" with (almost) every name.</p>
<p>Sometimes it sounds better if you use a shorter nickname. For example, Penny instead of Penelope.</p>
<h6>Most cases</h6>
<p>Unless your name begins with a vowel (A, E, I, O, U, or Y) or one of the special letters (B, F, or M), this is the pattern: </p>
Sally
</br>
Sally, Sally, bo-bally
</br>
Banana-fana fo-fally
</br>

Fee-fi-mo-mally
</br>

Sally!
</br><br>
<p>At the end of every line, the name gets repeated without the first letter; Sally becomes ally.</p>
<p>If we take (X) as the full name (Sally) and (Y) as the name without the first letter (ally) the verse would look like this:</p>
(X), (X), bo-b(Y) <br>
Banana-fana fo-f(Y) <br>
Fee-fi-mo-m(Y) <br>
(X)!
<br><br>
<h6>The exceptions</h6>

<p>If you have a vowel as the first letter of your name (Alex) you do not truncate the name. 
The verse looks like this: </p>
Alex
<br>
Alex, Alex, bo-balex
<br>
Banana-fana fo-falex
<br>
Fee-fi-mo-malex
<br>
Alex!
<br><br>

<pr>If your name starts with one of the special letters -- B, F, or M -- there is a special rule. 
The line that would "rebuild" the name (bo-billy) is sung without the first letter of the name. 
The verse for the name Billy looks like this:</p>
<br>
Billy
<br>
Billy, Billy, bo-illy 
<br>
Banana-fana fo-filly 
<br>
Fee-fi-mo-milly 
<br>
Billy!
`


let theRules = document.getElementById('theRules');
theRules.innerHTML = ruleDetails;