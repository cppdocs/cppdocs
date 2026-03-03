---
title: "std::experimental::filesystem::path::concat, std::experimental::filesystem::path::operator+="
source_path: "cpp/experimental/fs/path/concat"
category: "experimental"
---

Concatenates the current path and the argument.

## Declarations
```cpp
path& operator+=( const path& p );
```
_(filesystem TS)_

```cpp
path& operator+=( const string_type& str );
```
_(filesystem TS)_

```cpp
path& operator+=( const value_type* ptr );
```
_(filesystem TS)_

```cpp
path& operator+=( value_type x );
```
_(filesystem TS)_

```cpp
template< class Source >
path& operator+=( const Source& source );
```
_(filesystem TS)_

```cpp
template< class CharT >
path& operator+=( CharT x );
```
_(filesystem TS)_

```cpp
template< class Source >
path& concat( const Source& source );
```
_(filesystem TS)_

```cpp
template< class InputIt >
path& concat( InputIterator first, InputIterator last );
```
_(filesystem TS)_

## Parameters
- `p`: path to append
- `str`: string to append
- `ptr`: pointer to the beginning of a null-terminated string to append
- `x`: single character to append
- `source`: std::basic_string, null-terminated multicharacter string, or an input iterator pointing to a null-terminated multicharacter sequence, which represents a path name (either in portable or in native format)
- `first, last`: pair of LegacyInputIterators that specify a multicharacter sequence that represents a path name

## Return value
*this

## Notes
Unlike with [append()](/cpp/experimental/fs/path/append/) or [operator/=](/cpp/experimental/fs/path/append/), additional directory separators are never introduced.

## Example
```cpp
#include <experimental/filesystem>
#include <iostream>
namespace fs = std::experimental::filesystem;
 
int main()
{
    fs::path p1; // empty path
    p1 += "var"; // does not insert a separator
    std::cout << "\"\" + \"var\" == " << p1 << '\n';
    p1 += "lib"; // does not insert a separator
    std::cout << "\"\" + \"var\" + \"lib\" == " << p1 << '\n';
}
```

## See also
- [appendoperator/=](/cpp/experimental/fs/path/append/)
- [operator/](/cpp/experimental/fs/path/operator_slash/)
