---
title: "std::basic_string<CharT,Traits,Allocator>::erase"
source_path: "cpp/string/basic_string/erase"
category: "string"
---

Removes specified characters from the string.

## Declarations
```cpp
basic_string& erase( size_type index = 0, size_type count = npos );
```
_(constexpr since C++20)_

```cpp
iterator erase( iterator position );
```
_(until C++11)_

```cpp
iterator erase( const_iterator position );
```
_(since C++11) (constexpr since C++20)_

```cpp
iterator erase( iterator first, iterator last );
```
_(until C++11)_

```cpp
iterator erase( const_iterator first, const_iterator last );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `index`: first character to remove
- `count`: number of characters to remove
- `position`: iterator to the character to remove
- `first, last`: range of the characters to remove

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s = "This Is An Example";
    std::cout << "1) " << s << '\n';
 
    s.erase(7, 3); // erases " An" using overload (1)
    std::cout << "2) " << s << '\n';
 
    s.erase(std::find(s.begin(), s.end(), ' ')); // erases first ' '; overload (2)
    std::cout << "3) " << s << '\n';
 
    s.erase(s.find(' ')); // trims from ' ' to the end of the string; overload (1)
    std::cout << "4) " << s << '\n';
 
    auto it = std::next(s.begin(), s.find('s')); // obtains iterator to the first 's'
    s.erase(it, std::next(it, 2)); // erases "sI"; overload (3)
    std::cout << "5) " << s << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 27 | C++98 | overload (3) did not erase the character last pointed to, but it returnedthe iterator pointing to the character immediately following that character | returns an iteratorpointing to that character |
| LWG 428 | C++98 | overload (2) explicitly required position to be valid, butSequenceContainer requires it to be dereferenceable (stricter) | removed theexplicit requirement |
| LWG 847 | C++98 | there was no exception safety guarantee | added strong exceptionsafety guarantee |

## See also
- [clear](/cpp/string/basic_string/clear/)
