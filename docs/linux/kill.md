# kill 명령어에 대해

```bash
# trap for graceful shutdown
TERM_SIGNAL="N"
function gracefully_shutdown ()
{
        TERM_SIGNAL="Y"
}
trap 'gracefully_shutdown' TERM
...

if [ "$TERM_SIGNAL" == "Y" ]; then
        echo -e "$(date '+%Y-%m-%d %H:%M:%S,%3N') Result Data Job Scheduler exit(TERM Signal) " >> $LOG
        exit 1
fi	
```