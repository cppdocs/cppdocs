---
title: "std::basic_string_view<CharT,Traits>::begin, std::basic_string_view<CharT,Traits>::cbegin"
source_path: "cpp/string/basic_string_view/begin"
category: "string"
since: "C++17"
---

Returns an iterator to the first character of the view.

## Declarations
```cpp
constexpr const_iterator begin() const noexcept;
```
_(since C++17)_

```cpp
constexpr const_iterator cbegin() const noexcept;
```
_(since C++17)_

## Return value
const_iterator to the first character.

## Example
```cpp
#include <concepts>
#include <string_view>
 
int main()
{
    constexpr std::string_view str_view("abcd");
 
    constexpr auto begin = str_view.begin();
    constexpr auto cbegin = str_view.cbegin();
    static_assert(
        *begin == 'a' and
        *cbegin == 'a' and
        *begin == *cbegin and
        begin == cbegin and
        std::same_as<decltype(begin), decltype(cbegin)>);
}
```

## See also
- [endcend](/cpp/string/basic_string_view/end/)
- [begincbegin](/cpp/string/basic_string/begin/)
