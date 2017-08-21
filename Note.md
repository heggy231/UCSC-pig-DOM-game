# create random number from 1 through 6

We use Math.floor (not Math.ceil) since dice 1 - 6.

Math.ceil (round up) do not work since if Math.random() outputs number = 0 then Math.ceil will output 0.
Since ceiling of 0 is 0.  Therefore, it is very rare that we get 0 randomly which makes getting
- ceiling is 1, but only if x > 0.  ceiling is 0, if x = 0
try)
x = Math.random * n
// output: [0, 1) from 0 (inclusive) up to but not including 1 (exclusive) 

Math.ceil(Math.random() * 2) 
// output: 1 (only when 0 very rare), 2,3  almost always 2,3 are generated instead 

For Math.floor, 0, ..., 0.99999, the floor of which is 0 (round down).

Math.floor(Math.random() * 2)
// output: 0,1  (this is better method since )

To get number in between 1 to 6
// Math.random() * 6 => [0, 6) 
// Math.floor(Math.random() * 6) => [1,2,3,4,5,6]
Math.floor(Math.random() * 6 ) + 1
// output: 1 through 6

Resource on Math.floor() or Math.ceil()
https://www.codecademy.com/en/forum_questions/555fd11c9113cbf0910006e3