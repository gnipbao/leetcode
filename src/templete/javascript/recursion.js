// template for recursion
function recursion(level, params1, params2) {
  // recursion terminator
  if (level > MAX_LEVEL) {
    // process_result
    return;
  }
  
  // process logic in current level
  process(level, data...) 

  // drill down
  recursion(level + 1, p1, ...)
  
  // reverse the current level status if needed
}
