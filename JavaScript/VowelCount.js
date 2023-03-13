/**
 * Vowel Count
 * Return the number (count) of vowels in the given string.

    We will consider a, e, i, o, u as vowels for this Kata (but not y).

    The input string will only consist of lower case letters and/or spaces.
 * 
 */

function getCount(str) {
    const myArray = str.split("");
    const vowel = "aeiou".split("");
    let cpt = 0;
      
    for(const element of vowel)
    {
        for(const element2 of myArray)
        {
            if (element == element2)
            {
                cpt++;
            }
        }
    }  
    return cpt;
}