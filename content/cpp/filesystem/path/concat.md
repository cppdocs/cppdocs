---
title: "std::filesystem::path::concat, std::filesystem::path::operator+="
source_path: "cpp/filesystem/path/concat"
category: "filesystem"
since: "C++17"
---

Concatenates the current path and the argument

## Declarations
```cpp
path& operator+=( const path& p );
```
_(since C++17)_

```cpp
path& operator+=( const string_type& str );
path& operator+=( std::basic_string_view<value_type> str );
```
_(since C++17)_

```cpp
path& operator+=( const value_type* ptr );
```
_(since C++17)_

```cpp
path& operator+=( value_type x );
```
_(since C++17)_

```cpp
template< class CharT >
path& operator+=( CharT x );
```
_(since C++17)_

```cpp
template< class Source >
path& operator+=( const Source& source );
```
_(since C++17)_

```cpp
template< class Source >
path& concat( const Source& source );
```
_(since C++17)_

```cpp
template< class InputIt >
path& concat( InputIt first, InputIt last );
```
_(since C++17)_

## Parameters
- `p`: path to append
- `str`: string or string view to append
- `ptr`: pointer to the beginning of a null-terminated string to append
- `x`: single character to append
- `source`: std::basic_string, std::basic_string_view, null-terminated multicharacter string, or an input iterator pointing to a null-terminated multicharacter sequence, which represents a path name (either in portable or in native format)
- `first, last`: pair of LegacyInputIterators that specify a multicharacter sequence that represents a path name

## Return value
*this

## Notes
Unlike with [append()](/cpp/filesystem/path/append/) or [operator/=](/cpp/filesystem/path/append/), additional directory separators are never introduced.

## Example
```cpp
#include <filesystem>
#include <iostream>
#include <string>
 
int main()
{
    std::filesystem::path p1; // an empty path
    p1 += "var"; // does not insert a separator
    std::cout << R"("" + "var" --> )" << p1 << '\n';
    p1 += "lib"; // does not insert a separator
    std::cout << R"("var" + "lib" --> )" << p1 << '\n';
    auto str = std::string{"1234567"};
    p1.concat(std::begin(str) + 3, std::end(str) - 1);
    std::cout << "p1.concat --> " << p1 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3055 | C++17 | the specification of concatenating a single character was ill-formed | made well-formed |
| LWG 3244 | C++17 | constraint that Source cannot be path was missing | added |

## See also
- [appendoperator/=](/cpp/filesystem/path/append/)
- [operator/](/cpp/filesystem/path/operator_slash/)
