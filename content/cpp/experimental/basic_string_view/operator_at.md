---
title: "std::experimental::basic_string_view<CharT,Traits>::operator[]"
source_path: "cpp/experimental/basic_string_view/operator_at"
category: "experimental"
---

Returns a const reference to the character at specified location pos.

## Declarations
```cpp
constexpr const_reference operator[](size_type pos) const;
```
_(library fundamentals TS)_

## Parameters
- `pos`: position of the character to return

## Return value
Const reference to the requested character

## Notes
Unlike [std::basic_string::operator[]](/cpp/string/basic_string/operator_at/), basic_string_view::operator[](size()) has undefined behavior instead of returning CharT().

## Example
```cpp
#include <iostream>
#include <experimental/string_view>
int main()
{
    std::string str = "Exemplar";
    std::experimental::string_view v = str;
    std::cout << v[2] << '\n';
//  v[2] = 'y'; // Error: cannot modify through a string view
    str[2] = 'y';
    std::cout << v[2] << '\n';
}
```

## See also
- [at](/cpp/experimental/basic_string_view/at/)
