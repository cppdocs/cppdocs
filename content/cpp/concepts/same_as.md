---
title: "std::same_as"
source_path: "cpp/concepts/same_as"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept same_as<T, U> is satisfied if and only if T and U denote the same type.

## Declarations
```cpp
template< class T, class U >
concept same_as = /* see below */;
```
_(since C++20)_

## Example
```cpp
#include <concepts>
#include <iostream>
 
template<typename T, typename ... U>
concept IsAnyOf = (std::same_as<T, U> || ...);
 
template<typename T>
concept IsPrintable = std::integral<T> || std::floating_point<T> ||
    IsAnyOf<std::remove_cvref_t<std::remove_pointer_t<std::decay_t<T>>>, char, wchar_t>;
 
void println(IsPrintable auto const ... arguments)
{
    (std::wcout << ... << arguments) << '\n';
}
 
int main()
{
    println("Example: ", 3.14, " : ", 42, " : [", 'a', L'-', L"Z]");
}
```

## See also
- [is_same](/cpp/types/is_same/)
