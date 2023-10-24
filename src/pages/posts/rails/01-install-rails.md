---
layout: '@/templates/BasePost.astro'
title: 01-安装rails开发坏境
description: 一些安装rails的开发环境的命令和注意事项和一些配置。
pubDate: 2023-10-24T00:00:00Z
imgSrc: '/assets/images/image-post2.jpeg'
imgAlt: 'Image post 2'
---

## ubuntu/debian 环境安装 rails

### 1. 更新 系统环境及安装开发环境

```shell
sudo apt update && sudo apt upgrade

sudo apt-get install git-core curl zlib1g-dev build-essential \
libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libmariadbd-dev \
                     libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common  zlib1g-dev
```

### 2. 安装 rbenv

```bash
git clone git@github.com:rbenv/rbenv.git ~/.rbenv
git clone https://github.com/rbenv/rbenv.git ~/.rbenv

echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc

echo 'eval "$(rbenv init -)"' >> ~/.bashrc

git clone git@github.com:rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc

git clone git@github.com:AndorChen/rbenv-china-mirror.git ~/.rbenv/plugins/rbenv-china-mirror
git clone https://github.com/AndorChen/rbenv-china-mirror.git ~/.rbenv/plugins/rbenv-ch
git clone https://github.com/rkh/rbenv-update.git ~/.rbenv/plugins/rbenv-update
exec $SHELL
```
### 3. 安装ruby
```shell
rbenv install 2.4.1

rbenv global 2.4.1
```

### 4. 设置国内源

```shell
gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
gem sources -l
https://gems.ruby-china.com
# 确保只有 gems.ruby-china.com
```

### 5. 安装rails

```shell
echo "gem: --no-ri --no-rdoc" > ~/.gemrc  # 可以让gem下载速度快一些 不用下载不必要的说明文档


gem install rails
```

### 6. 设置bundler的源地址映像

```shell
bundle config mirror.https://rubygems.org https://gems.ruby-china.com
```

### 7. 安装 nodejs， rails 运行的时候需要有js的运行环境

```shell
可以添加 node 官方源 用 apt安装最新版nodejs
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
#或者 如果同时还在用node.js开发 也可以使用nvm
```

### ps. 如果rbenv一直提示需要安装 openssl 请添加环境变量

```shell
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=/usr/local/opt/openssl@1.1"
```

## mac osx安装rails环境

### 1. 安装xcode CLT

```shell
xcode-select --install
```

### 2 第2步开始与上面的相同
> ps.如使用 zsh,将 .bashrc 换成 .zshrc