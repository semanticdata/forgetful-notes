# Windows Subsystem for Linux

## Navigating

Source: [dev.to/aleksandrhovhannisyan/comment/lha3](https://dev.to/aleksandrhovhannisyan/comment/lha3)

```sh
cd "$(wslpath "C:\Your\Windows\Directory")"
```

## Explanation

You can copy a path from File Explorer, for example, and use the above to navigate to it in WSL. wslpath is a built-in utility.
