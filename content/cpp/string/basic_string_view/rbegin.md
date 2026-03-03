---
title: "std::basic_string_view<CharT,Traits>::rbegin, std::basic_string_view<CharT,Traits>::crbegin"
source_path: "cpp/string/basic_string_view/rbegin"
category: "string"
since: "C++17"
---

Returns a reverse iterator to the first character of the reversed view. It corresponds to the last character of the non-reversed view.

## Declarations
```cpp
constexpr const_reverse_iterator rbegin() const noexcept;
```
_(since C++17)_

```cpp
constexpr const_reverse_iterator crbegin() const noexcept;
```
_(since C++17)_

## Return value
const_reverse_iterator to the first character.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <string_view>
 
int main()
{
    std::ostream_iterator<char> out_it(std::cout);
    std::string_view str_view("abcdef");
 
    std::copy(str_view.rbegin(), std::next(str_view.rbegin(), 3), out_it);
    *out_it = '\n';
 
    std::copy(str_view.crbegin(), std::next(str_view.crbegin(), 3), out_it);
    *out_it = '\n';
}
```

## See also
- [rendcrend](/cpp/string/basic_string_view/rend/)
- [rbegincrbegin](/cpp/string/basic_string/rbegin/)
