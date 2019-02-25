#!/bin/bash

# path variables
PATH_ALGO_POST="../../algorithm"
PATH_BLOG_POST="../../blog"
PATH_DB_POST="../../db"
PATH_LINUX_POST="../../linux"
PATH_POSTS="../../posts"
ROOT_DIR="../../"
FOLDERS=`ls -alt ${ROOT_DIR} | grep ^d`

for folder in ${FOLDERS}
do
    echo ${folder}
done

echo ${FOLDERS}