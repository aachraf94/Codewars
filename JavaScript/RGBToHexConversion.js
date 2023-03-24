/**
 * The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

 */

function rgb(r, g, b){
    // complete this function
    let rStr = "";
    let gStr = "";
    let bStr = "";
    
    if (r > 255)
      {r = 255;
      rStr = r.toString(16);}
    if(r <= 0 )
      {rStr= "00" ;}
    else
      {
        rStr = r.toString(16);
      }
    
    if (g > 255)
      {g = 255;
      gStr = g.toString(16);}
    if(g <= 0 )
      {gStr = "00";}
    else
      {
        gStr = g.toString(16);
      }
    
    if (b > 255)
      {b = 255;
      bStr = b.toString(16);}
    if(b <= 0 )
      {bStr = "00" ;}
    else 
      {
        bStr = b.toString(16);
      }
    
    if (rStr.length <= 1)
      {rStr= "0"+rStr ;}
    
    if (gStr.length <= 1)
      {gStr= "0"+gStr ;}
    
    if (bStr.length <= 1)
      {bStr= "0"+bStr ;}
    
    
    return (rStr+gStr+bStr).toUpperCase();  
  }