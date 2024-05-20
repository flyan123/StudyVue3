# 安装git
https://git-scm.com/downloads

# git 设置
$ git config --global user.name "Your Name"
$ git config --global user.email "email@example.com"


拉取：
1. 仓库 （自己的）
//ssh
git clone git@gitee.com:ge_minglin/gitskill.git 

//https
git clone https://gitee.com/ge_minglin/gitskill.git


## 拉取
git clone /kləʊn/ ' 仓库地址'：用于创建远程仓库的完整本地副本，
git pull /pʊl/ ' 仓库地址'：用于在本地仓库已经存在的情况下，从远程仓库获取并合并最新的更改。


## 看
git status /ˈsteɪtəs/ ：查看当前版本状态（是否修改）

## 交

1. 检查当前分支：git branch /brɑːntʃ/
   (查看当前所有分支，并用*标记出当前分支。)
    git branch -a （用于查看本地仓库和远程仓库中的所有分支）

2. 创建新分支：git checkout /ˈtʃekaʊt/-b <新分支名称>
    (命令完成，它会创建一个新分支并立即切换到这个分支。)

3. 进行更改：在新的分支上，你可以进行代码更改、添加文件、删除文件等

4. 提交更改：一旦你对代码进行了更改并准备保存这些更改，
   1. git add /æd/ . :将更改添加到暂存区，
   2. git commit /kəˈmɪt/ -m "提交信息":提交暂存区到本地仓库

5. 推送分支到远程仓库：git push

2.git fetch     (是用于从远端仓库下载内容的主要命令)
3.git branch -a （用于查看本地仓库和远程仓库中的所有分支）
4.git push （把本地项目提交到远程仓库）

# 拉取别人项目

1. git clone <远程仓库地址>
将<远程仓库地址>替换为你要拉取项目的实际Git仓库URL。执行这个命令后，Git会在当前目录下创建一个新的子目录（通常与远程仓库同名），并将远程仓库中的所有文件和目录复制到这个子目录中。

2. 进入项目目录：克隆完成后，你可以使用cd命令进入项目目录，开始你的开发工作。
cd 项目名

3. 拉取更新（可选）：如果你在未来的某个时候想要获取别人对项目所做的更新，你可以再次进入项目目录，并执行git pull命令。例如：
cd 项目名  
git pull origin master
这将会从远程仓库的master分支拉取最新的更改到你的本地仓库。请注意，分支名master可能因项目的不同而有所变化，有些项目可能使用main作为主分支名。
