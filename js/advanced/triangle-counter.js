/* We have a triabgle made of blocks.  The topmost row has 1 block,
 * the next row has 2 blocks, the next row has 3 blocks, and so on.
 * Compute the total number of blocks in such a triangle with the
 * given number of rows.

triangle(2) ---> 3
 *
* *

triangle(3) ---> 6
  *
 * *
* * *

triangle(4) ---> 10
   *
  * *
 * * *
* * * *

triangle(5) --->
    *
   * *
  * * *
 * * * *
* * * * *

*/
function triangleBlocks(rows)
{
    if(rows < 2)
        return rows;
    return rows + triangleBlocks(rows - 1);
}
console.log(triangleBlocks(9));