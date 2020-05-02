// divide conquer 
function divide_conquer(problem, params1, parmas2) {
  // recursion terminator
  if (!problem) return;
  // prepare data
  data = prepare_data(problem);
  subproblems = split_problem(problem, data);
  // conquer subproblems
  subproblems1 = divide_conquer(subproblems[0],p1,...);
  subproblems2 = divide_conquer(subproblems[1],p1,...);
  subproblems3 = divide_conquer(subproblems[2],p1,...);

  // process and generate the final result
  result = process_result(subresult1, subresult2, subresult3,...);

  // revert the current level states

}
