---
title: "std::experimental::filesystem::path::append, std::experimental::filesystem::path::operator/="
source_path: "cpp/experimental/fs/path/append"
category: "experimental"
---

1) First, appends the preferred directory separator to this, except if any of the following conditions is true:

## Declarations
```cpp
path& operator/=( const path& p );
```
_(filesystem TS)_

```cpp
template< class Source >
path& operator/=( const Source& source );
```
_(filesystem TS)_

```cpp
template< class Source >
path& append( const Source& source );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path& append( InputIt first, InputIt last );
```
_(filesystem TS)_

## Parameters
- `p`: pathname to append
- `source`: std::basic_string, null-terminated multicharacter string, or an input iterator pointing to a null-terminated multicharacter sequence, which represents a path name (either in portable or in native format)
- `first, last`: pair of LegacyInputIterators that specify a multicharacter sequence that represents a path name

## Return value
*this

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p1 = "C:";
    p1 /= "Users"; // does not insert a separator
                   // "C:Users" is a relative path in Windows
                   // adding directory separator would turn it to an absolute path
    std::cout << "\"C:\" / \"Users\" == " << p1 << '\n';
    p1 /= "batman"; // inserts fs::path::preferred_separator, '\' on Windows
    std::cout << "\"C:\" / \"Users\" / \"batman\" == " << p1 << '\n';
}
```

## See also
- [concatoperator+=](/cpp/experimental/fs/path/concat/)
- [operator/](/cpp/experimental/fs/path/operator_slash/)
