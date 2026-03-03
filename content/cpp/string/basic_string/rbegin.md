---
title: "std::basic_string<CharT,Traits,Allocator>::rbegin, std::basic_string<CharT,Traits,Allocator>::crbegin"
source_path: "cpp/string/basic_string/rbegin"
category: "string"
since: "C++11"
---

Returns a reverse iterator to the first character of the reversed string. It corresponds to the last character of the non-reversed string.

## Declarations
```cpp
reverse_iterator rbegin();
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_reverse_iterator rbegin() const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_reverse_iterator crbegin() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Reverse iterator to the first character.

## Notes
libc++ backports crbegin() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s("Exemplar!");
    *s.rbegin() = 'y';
    std::cout << s << '\n'; // "Exemplary"
 
    std::string c;
    std::copy(s.crbegin(), s.crend(), std::back_inserter(c));
    std::cout << c << '\n'; // "yralpmexE"
}
```

## See also
- [rendcrend](/cpp/string/basic_string/rend/)
- [rbegincrbegin](/cpp/string/basic_string_view/rbegin/)
