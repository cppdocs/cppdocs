---
title: "std::experimental::filesystem::path::compare"
source_path: "cpp/experimental/fs/path/compare"
category: "experimental"
---

Compares the lexical representations of the path and another path.

## Declarations
```cpp
int compare( const path& p ) const noexcept;
```
_(filesystem TS)_

```cpp
int compare( const string_type& str ) const;
```
_(filesystem TS)_

```cpp
int compare( const value_type* s ) const;
```
_(filesystem TS)_

## Parameters
- `p`: a path to compare to
- `str`: a string representing path to compare to
- `s`: a null-terminated string representing path to compare to

## Return value
A value less than 0 if the path is lexicographically less than the given path.

## Notes
For two-way comparisons, [binary operators](/cpp/experimental/fs/path/operator_cmp/) may be more suitable.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
void demo(int rc, fs::path p1, fs::path p2)
{
    if (rc < 0)
        std::cout << p1 << " < " << p2 << '\n';
    else if (rc > 0)
        std::cout << p1 << " > " << p2 << '\n';
    else if (rc == 0)
        std::cout << p1 << " = " << p2 << '\n';
}
 
int main()
{
    fs::path p1 = "/a/b/"; // as if "a/b/." for lexicographical iteration
    fs::path p2 = "/a/b/#";
    demo(p1.compare(p2), p1, p2);
    demo(p1.compare("a/b/_"), p1, "a/b/_");
}
```

## See also
- [operator==operator!=operator<operator<=operator>operator>=](/cpp/experimental/fs/path/operator_cmp/)
