/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];

  for (const currentAsteroid of asteroids) {
    if (currentAsteroid > 0) {
      // current asteroid is +ve
      stack.push(currentAsteroid);
    } else {
      // current asteroid is -ve

      // if the stack is empty, current asteroid is placed in the stack
      if (!stack.length) {
        stack.push(currentAsteroid);
        continue;
      }

      // if the stack is not empty, current asteroid takes aim at the stored +ve asteroids(if any)
      while (stack.length) {
        const storedAsteroid = stack.pop();

        if (storedAsteroid > 0) {
          // case: stored asteroid is +ve

          if (Math.abs(currentAsteroid) === storedAsteroid) {
            // if the stored asteroid and current -ve asteroid are equal in mass
            // they both blow up (both are removed from stack)
            break;
          } else if (Math.abs(currentAsteroid) < storedAsteroid) {
            // if the stored asteroid is bigger than the current -ve asteroid, then
            // the current asteroid blow up (storead asteroid makes it way back into the stack)
            stack.push(storedAsteroid);
            break;
          } else {
            // current -ve asteroid is greater in size than the stored +ve asteroid,
            // blows it up and go for the next stored +ve asteroid(if any)

            if (!stack.length) {
              // -ve currentAsteroid blew all the stored +ve ones and rendered the stack empty
              stack.push(currentAsteroid); // adding the winning -ve current asteroid to stack
              break;
            }
          }
        } else {
          // case: stored asteroid is -ve(going left), hence both the stored and current asteroid
          // make their way back into the stack

          stack.push(storedAsteroid);
          stack.push(currentAsteroid);
          break;
        }
      }
    }
  }

  return stack;
};
// @lc code=end
