#!/bin/bash

BASE_DIR="/Users/hanjangho/Documents/GitHub/toy/docs/"
CONFIG_FILE_DIR=${BASE_DIR}".vuepress"
IGNORE_DIR="public"
FOLDERS=`ls -l ${BASE_DIR} | grep ^d | awk '{print $9}'`

for folder in ${FOLDERS}
do
    if [ "${folder}" != "${IGNORE_DIR}" ];
    then
        TARGET_DIR=${BASE_DIR}${folder}"/"
        FILE_NAMES=`ls -l ${TARGET_DIR} | grep ^- | awk '{print $9}'`
        for FILE_NAME_WITH_EXT in ${FILE_NAMES}
        do
            # echo ${FILE_NAME_WITH_EXT}
            # echo ${FILE_NAME_WITH_EXT_SPLIT[0]}
            OIFS=$IFS;IFS='.';FILE_NAME_WITH_EXT_SPLIT=$FILE_NAME_WITH_EXT
            FILE_NAME=${FILE_NAME_WITH_EXT_SPLIT[0]}
            EXT=${FILE_NAME_WITH_EXT_SPLIT[1]}
            OIFS=$IFS;IFS='-';FILE_NM_SPLIT=${FILE_NAME_WITH_EXT_SPLIT[0]}
            SUB_MENU=${FILE_NM_SPLIT[0]}

            # config.js 파일에서 sub_menu 찾아 그 위에 FileName 추가해 준다.
                        
        done
    fi
done

echo ${FOLDERS}


#   #!/bin/bash

# DB_USERID="root"
# DB_PASSWORD="akstnanrkd123@"
# 
# RESULT_PARALLEL_PROCESS_CNT_CHECK_QUERY="SELECT SET_VALUE FROM kmng.t_cust_opt WHERE SET_KEY = 'ResultParallel';"
# RESULT_PARALLEL_PROCESS_CNT=$(mysql -u${DB_USERID} -p${DB_PASSWORD} -e "SELECT SET_VALUE FROM kmng.t_cust_opt WHERE SET_KEY = 'ResultParallel';" | sed -n '2p')
# KTMP_DB_CNT=10;
# 
# for ((i=1; i<=$KTMP_DB_CNT; i++));do
#    DB_NAME="ktmp"
#    DB_NAME+=$i
#    IS_EXIST=$(/usr/bin/mysql -u${DB_USERID} -p${DB_PASSWORD} -e "SELECT 1 FROM Information_schema.SCHEMATA WHERE SCHEMA_NAME = '${DB_NAME}'" | sed -n '2p')
#    if [ "${IS_EXIST}" != "1" ];then
#       /usr/bin/mysql -u${DB_USERID} -p${DB_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${DB_NAME}"
#       /usr/bin/mysql -u${DB_USERID} -p${DB_PASSWORD} ${DB_NAME}< /home/new/ktmp_create.sql
#    fi
# 
#    CRONTAB_EXISTS=$(crontab -l | grep resultDataJobScheduler${i}.sh)
#    if [ "${CRONTAB_EXISTS}" == "" ]; then
#       echo "@reboot /usr/local/tomcat/webapps/ksmart/common/sh/ft/resultDataJobScheduler${i}.sh &" >> ${CRON_FILE}
#       echo "* * * * * /usr/local/tomcat/webapps/ksmart/common/sh/ft/resultProcCheck${i}.sh" >> ${CRON_FILE}
#    fi
# done
# 
# if [ "${RESULT_PARALLEL_PROCESS_CNT}" == "" ];then
#    RESULT_PARALLEL_INIT_QUERY="INSERT INTO kmng.cust_opt(SET_KEY, SET_VALUE, SET_TYPE, DUE_DATE) VALUES('ResultParallel, '10', 'NOSESSION', 9999-12-31 23:59:59)"
#    /usr/bin/mysql -u${DB_USERID} -p${DB_PASSWORD} -e ${RESULT_PARALLEL_INIT_QUERY} 2 >> ${LOG}
# fi



