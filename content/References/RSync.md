---
---
# RSync

- --quiet
  This option decreases the amount of information you are given during the transfer, notably suppressing information messages from the remote server. This option is useful when invoking rsync from cron.
- --checksum
  This changes the way rsync checks if the files have been changed and are in need of a transfer. Without this option, rsync [[Uses]] a "quick check" that (by default) checks if each file's size and time of last modification match between the sender and receiver. This option changes this to compare a 128-bit checksum for each file that has a matching size. Generating the checksums means that both sides will expend a lot of disk I/O reading all the data in the files in the transfer, so this can slow things down significantly (and this is prior to any reading that will be done to transfer changed files)
- --archive
  This is equivalent to `-rlptgoD`. It is a quick way of saying you want recursion and want to preserve almost everything. Be aware that it does **not** include preserving ACLs (`-A`), xattrs (`-X`), atimes (`-U`), crtimes (`-N`), nor the finding and preserving of hardlinks (`-H`).
- --recursive
  This tells rsync to copy directories recursively. See also `--dirs` (`-d`) for an option that allows the scanning of a single directory.
- --dirs
  Tell the sending side to include any directories that are encountered. Unlike --recursive, a directory's contents are not copied unless the directory name specified is "." or ends with a trailing slash (e.g. ".", "dir/.", "dir/", etc.). Without this option or the --recursive option, rsync will skip all directories it encounters (and output a message to that effect for each one). If you specify both --dirs and --recursive, --recursive takes precedence.
- --times
  This tells rsync to transfer modification times along with the files and update them on the remote system.
- --dry-run
  This makes rsync perform a trial run that doesn't make any changes (and produces mostly the same output as a real run). It is most commonly used in combination with the --verbose (-v) and/or --itemize-changes (-i) options to see what an rsync command is going to do before one actually runs it.

```powershell
C:\Users\pimentma\OneDrive - Metropolitan Council\Desktop\Scratchpad\Source
```

```powershell
H:\AllTemp\Pimentel
```
