---
title: "std::experimental::filesystem::operator/(std::experimental::filesystem::path)"
source_path: "cpp/experimental/fs/path/operator"
header: "<experimental/filesystem>"
category: "experimental"
---

Concatenates two paths. Effectively returns path(lhs) /= rhs.

## Declarations
```cpp
path operator/( const path& lhs, const path& rhs );
```
_(filesystem TS)_

## Parameters
- `lhs, rhs`: paths to concatenate

## Return value
The result of path concatenation.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p1 = "C:Users";
    std::cout << "\"C:\" / \"Users\" == " << p1 << '\n';
    fs::path p2 = "batman";
    fs::path p3 = p1 / p2; // inserts fs::path::preferred_separator, '\' on Windows
    std::cout << "\"C:\" / \"Users\" / \"batman\" == " << p3 << '\n';
}
```

## See also
- [appendoperator/=](/cpp/experimental/fs/path/append/)
