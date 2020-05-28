let result = [];
function backtrack(path /**路径 */, list /**选择列表 */) {
    // terminator
    if(/**满足条件 */){
        result.push(path);
        return;
    }

    for(let i = 0;i<list.length;i++){
        // 做选择

        // 回溯 下一层
        backtrack(path.slice(), list)

        // 撤销选择
    }
}
