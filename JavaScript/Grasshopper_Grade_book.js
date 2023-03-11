/*
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

Numerical Score	Letter Grade
90 <= score <= 100	'A'
80 <= score < 90	'B'
70 <= score < 80	'C'
60 <= score < 70	'D'
0 <= score < 60	'F'
*/

function getGrade (s1, s2, s3) {
    let score = (s1+s2+s3)/3;
    if (90 <= score)
    {
      return 'A';
    }
    else if ((80 <= score) && (score < 90)) {
      return 'B';
    }
    else if (( 70 <= score ) && ( score < 80 ))
    {
      return 'C';
    }
    else if ((60 <= score ) && ( score < 70))
    {
      return 'D';
    }
    else if ( score < 60)
      {
        return 'F';
      }
  }