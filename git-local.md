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

- 

# 配置git 用户
- git config --list   （显示git用户信息）
- git config --global user.name="用户名字";
- git config --global user.email="用户邮箱";

# 初始化git
- git init （告诉哪个文件夹-项目被git管理，一个项目初始化一次，不能文件夹嵌套初始化，管理谁在谁的文件夹下执行，执行完成后会在当文件夹下生成.git文件夹---rm -rf .git 删除本文件夹，也就意味着git不管理此项目）
- git status （查看状态）


## 删除暂存区
git rm --cached 文件名