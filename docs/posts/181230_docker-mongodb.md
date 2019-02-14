# docker-mongodb
```bash
docker run mongo
# docker process 확인
# docker ps -a

# dockdr container 접속
docker exec -it mongo(pid) /bin/bash
# root@b498bf5e7aec:/# ps -ef | grep mongo
# mongodb      1     0  0 08:25 ?        00:00:05 mongod --bind_ip_all
# root        62    48  0 08:47 pts/0    00:00:00 grep --color=auto mongo
```