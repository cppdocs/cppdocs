---
title: "std::holds_alternative"
source_path: "cpp/utility/variant/holds_alternative"
header: "<variant>"
category: "utility"
since: "C++17"
---

Checks if the variant v holds the alternative T. The call is ill-formed if T does not appear exactly once in Types...

## Declarations
```cpp
template< class T, class... Types >
constexpr bool holds_alternative( const std::variant<Types...>& v ) noexcept;
```
_(since C++17)_

## Parameters
- `v`: variant to examine

## Return value
true if the variant currently holds the alternative T, false otherwise.

## Example
```cpp
#include <cassert>
#include <string>
#include <variant>
 
int main()
{
    std::variant<int, std::string> v = "abc";
    assert(not std::holds_alternative<int>(v));
    assert(std::holds_alternative<std::string>(v));
}
```

## See also
- [index](/cpp/utility/variant/index/)
- [get(std::variant)](/cpp/utility/variant/get/)
