---
title: "std::basic_string_view<CharT,Traits>::rend, std::basic_string_view<CharT,Traits>::crend"
source_path: "cpp/string/basic_string_view/rend"
category: "string"
since: "C++17"
---

Returns a reverse iterator to the character following the last character of the reversed view. It corresponds to the character preceding the first character of the non-reversed view. This character acts as a placeholder, attempting to access it results in undefined behavior.

## Declarations
```cpp
constexpr const_reverse_iterator rend() const noexcept;
```
_(since C++17)_

```cpp
constexpr const_reverse_iterator crend() const noexcept;
```
_(since C++17)_

## Return value
const_reverse_iterator to the character following the last character.

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
 
    std::copy(str_view.rbegin(), str_view.rend(), out_it);
    *out_it = '\n';
 
    std::copy(str_view.crbegin(), str_view.crend(), out_it);
    *out_it = '\n';
}
```

## See also
- [rbegincrbegin](/cpp/string/basic_string_view/rbegin/)
- [rendcrend](/cpp/string/basic_string/rend/)
