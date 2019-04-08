# glibc update
1. 
```bash
mkdir ~/glibc_install; cd ~/glibc_install 
wget https://ftp.gnu.org/gnu/glibc/glibc-2.15.tar.gz
tar zxvf glibc-2.15.tar.gz
cd glibc-2.15
mkdir build
cd build
../configure --prefix=/opt/glibc-2.15
make -j4
sudo make install

export LD_LIBRARY_PATH=/opt/glibc-2.15/lib
```


2. 
```bash
#! /bin/sh

# update glibc to 2.17 for CentOS 6

wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-common-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-devel-2.17-55.el6.x86_64.rpm
wget http://copr-be.cloud.fedoraproject.org/results/mosquito/myrepo-el6/epel-6-x86_64/glibc-2.17-55.fc20/glibc-headers-2.17-55.el6.x86_64.rpm

sudo rpm -Uvh glibc-2.17-55.el6.x86_64.rpm \
glibc-common-2.17-55.el6.x86_64.rpm \
glibc-devel-2.17-55.el6.x86_64.rpm \
glibc-headers-2.17-55.el6.x86_64.rpm
```
