---
title: "std::basic_string<CharT,Traits,Allocator>::begin, std::basic_string<CharT,Traits,Allocator>::cbegin"
source_path: "cpp/string/basic_string/begin"
category: "string"
since: "C++11"
---

Returns an iterator to the first character of the string.

## Declarations
```cpp
iterator begin();
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_iterator begin() const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_iterator cbegin() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Iterator to the first character.

## Notes
libc++ backports cbegin() to C++98 mode.

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string s("Exemplar");
    *s.begin() = 'e';
    std::cout << s << '\n';
 
    auto i = s.cbegin();
    std::cout << *i << '\n';
//  *i = 'E'; // error: i is a constant iterator
}
```

## See also
- [endcend](/cpp/string/basic_string/end/)
- [begincbegin](/cpp/string/basic_string_view/begin/)
