---
title: "std::basic_string_view<CharT,Traits>::end, std::basic_string_view<CharT,Traits>::cend"
source_path: "cpp/string/basic_string_view/end"
category: "string"
since: "C++17"
---

Returns an iterator to the character following the last character of the view. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr const_iterator end() const noexcept;
```
_(since C++17)_

```cpp
constexpr const_iterator cend() const noexcept;
```
_(since C++17)_

## Return value
const_iterator to the character following the last character.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <string_view>
 
int main()
{
    constexpr std::string_view str_view("abcd");
    constexpr auto end = str_view.end();
    constexpr auto cend = str_view.cend();
 
    static_assert
    (
        *std::prev(end) == 'd' && 'd' == *std::prev(cend) and end == cend
    );
}
```

## See also
- [begincbegin](/cpp/string/basic_string_view/begin/)
- [endcend](/cpp/string/basic_string/end/)
