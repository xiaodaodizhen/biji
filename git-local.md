## 分布式(git) --速度快，有一个单独的.git文件夹
## 集中式（svn）--每个文件夹都有一个.svn 文件

# linux命令
- pwd  (print working directory)
- rm -rf 文件夹名字 （删除文件夹）
- rm 文件名字  （删除文件）
- mkdir 文件夹名字  （创建文件夹）
- ls （显示目录下所有非隐藏文件）
- ls -al(显示目录下所有文件，包含隐藏文件)

- touch 文件名1 文件名2    （创建文件，文件内容为空可以连续创建多个）
- cat 文件名     （查看文件）
- vi 文件名   （进入文件）
  - i （进入编辑模式）  esc (退出编辑模式)  :q! （强制退出）   :wq （保存退出）

- git add . / -A / 文件名 （添加到暂存区）
- git commit -m "消息记录"  (添加到历史区)
- git diff (工作区和暂存区的历史版本更改比较)
- git diff master (工作区和历史区的历史版本更改比较);
- git diff --cached (暂存区和历史区的版本更改比较)
# 配置git 用户
- git config --list   （显示git用户信息）
- git config --global user.name="用户名字";
- git config --global user.email="用户邮箱";

# 初始化git
- git init （告诉哪个文件夹-项目被git管理，一个项目初始化一次，不能文件夹嵌套初始化，管理谁在谁的文件夹下执行，执行完成后会在当文件夹下生成.git文件夹---rm -rf .git 删除本文件夹，也就意味着git不管理此项目）
- git status （查看状态）
- git add -A (提交到暂存区)
- 备注：工作区（文件名字的颜色是红色），暂存区（别名：过渡区，文件名字是绿色），历史区（别名：版本库，文件名字颜色是通用色，历史区的版本都有个版本id也就是版本号40位）

## 删除暂存区
git rm --cached 文件名

## 撤销
 - git checkout 文件名   / .    (将暂存区的内容覆盖工作区的内容)
 - git reset HEAD 文件名 /.     (将暂存区的内容回滚到上一版本)