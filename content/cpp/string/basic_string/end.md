---
title: "std::basic_string<CharT,Traits,Allocator>::end, std::basic_string<CharT,Traits,Allocator>::cend"
source_path: "cpp/string/basic_string/end"
category: "string"
since: "C++11"
---

Returns an iterator to the character following the last character of the string. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
iterator end();
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_iterator end() const;
```
_(noexcept since C++11) (constexpr since C++20)_

```cpp
const_iterator cend() const noexcept;
```
_(since C++11) (constexpr since C++20)_

## Return value
Iterator to the character following the last character.

## Notes
libc++ backports cend() to C++98 mode.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string>
 
int main()
{
    std::string s("Exemparl");
    std::next_permutation(s.begin(), s.end());
 
    std::string c;
    std::copy(s.cbegin(), s.cend(), std::back_inserter(c));
    std::cout << c << '\n'; // "Exemplar"
}
```

## See also
- [begincbegin](/cpp/string/basic_string/begin/)
- [endcend](/cpp/string/basic_string_view/end/)
