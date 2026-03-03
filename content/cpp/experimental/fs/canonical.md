---
title: "std::experimental::filesystem::canonical"
source_path: "cpp/experimental/fs/canonical"
header: "<experimental/filesystem>"
category: "experimental"
---

Converts path p to a canonical absolute path, i.e. an absolute path that has no dot, dot-dot elements or symbolic links.

## Declarations
```cpp
path canonical( const path& p, const path& base = current_path() );
```
_(filesystem TS)_

```cpp
path canonical( const path& p, error_code& ec );
```
_(filesystem TS)_

```cpp
path canonical( const path& p, const path& base, error_code& ec );
```
_(filesystem TS)_

## Parameters
- `p`: a path which may be absolute or relative to base, and which must be an existing path
- `base`: base path to be used in case p is relative
- `ec`: error code to store error status to

## Return value
An absolute path that resolves to the same file as absolute(p, base) (or absolute(p) for (2)).

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p = fs::path("..") / ".." / "AppData";
    std::cout << "Current path is " << fs::current_path() << '\n'
              << "Canonical path for " << p << " is " << fs::canonical(p) << '\n';
}
```

## See also
- [path](/cpp/experimental/fs/path/)
- [absolutesystem_complete](/cpp/experimental/fs/absolute/)
