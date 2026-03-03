---
title: "std::experimental::filesystem::absolute, std::experimental::filesystem::system_complete"
source_path: "cpp/experimental/fs/absolute"
header: "<experimental/filesystem>"
category: "experimental"
---

1) Returns absolute path of p relative to base according to the following rules:
If p has both root name and root directory (e.g. "C:\users", then the path is returned, unmodified.If p has a root name not followed by a root directory (e.g. "C:text.txt"), then base is inserted between p's root name and the remainder of p. Formally, p.root_name() / fs::absolute(base).root_directory() / fs::absolute(base).relative_path() / p.relative_path() is returned,If p has no root name, but has a root directory (e.g. "/var/tmp/file.txt" on a POSIX system or "\users\ABC\Document.doc" on Windows, then the root name of base, if it has one, is prepended to p (on a POSIX system, p is not modified, on a Windows system, "\users\ABC\Document.doc" becomes "C:\users\ABC\Document.doc". Formally, fs::absolute(base).root_name() / p is returned.If p has no root name and no root directory (e.g. "../file.txt", then the entire base is prepended to p. Formally, absolute(base) / p is returned.

## Declarations
```cpp
path absolute( const path& p, const path& base = current_path() );
```
_(filesystem TS)_

```cpp
path system_complete( const path& p );
path system_complete( const path& p, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: path to convert to absolute form
- `base`: path (not necessarily absolute) to serve as the starting location
- `ec`: out-parameter for error reporting in the non-throwing overload

## Return value
Returns an absolute (although not necessarily canonical) path formed by combining p and base as described above.

## Notes
On systems that support root names (e.g. Windows), the result of calling absolute on a relative path that has a root name (e.g. "D:file.txt" when the root name of base is different will usually result in a non-existent path.

## Example
```cpp
#include <filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = "C:cl.exe";
    std::cout << "Current path is " << fs::current_path() << '\n'
              << "Absolute path for " << p << " is " << fs::absolute(p) << '\n'
	      << "System complete path for " << p << " is "
              << fs::system_complete(p) << '\n';
}
```

## See also
- [canonical](/cpp/experimental/fs/canonical/)
