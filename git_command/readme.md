# 企业协作开发工具

 - 你写的代码 -> 入仓库 -> 入远程仓库
    1. git status  查看当前是什么情况
    2. git add . 添加修改
    3. git commit -m 'git command' 确认修改
    4. git push origin main 



    # git 考点
  文件 -> 暂存区 -> 仓库
  生成存储记录， leader check 我们工作和代码的重要手段
- 如果提交了代码到本地仓库， 后悔了怎么办?

  git reset --soft HEAD^   返回上一步
  HEAD 头指针， 指向当前的提交 ^ 上一次（只做小修改）
  --hard  撤销此次提交 文件修改也会撤销（完全不想要着此次代码）
  --soft  回到commit 之前 但是已经在暂存区了
  --mixed 撤销此次提交， 但是文件修改还在

- 美团 如何将多次提交合并成一次?
- 拼多多，  我要去拼多多

