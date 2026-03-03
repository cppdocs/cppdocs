---
title: "std::make_optional"
source_path: "cpp/utility/optional/make_optional"
header: "<optional>"
category: "utility"
since: "C++17"
---

1) Creates an optional object from value. Effectively calls [std::optional](/cpp/utility/optional/)<[std::decay_t](/cpp/types/decay/)<T>>([std::forward](/cpp/utility/forward/)<T>(value)).

## Declarations
```cpp
template< class T >
constexpr std::optional<std::decay_t<T>> make_optional( T&& value );
```
_(since C++17)_

```cpp
template< class T, class... Args >
constexpr std::optional<T> make_optional( Args&&... args );
```
_(since C++17)_

```cpp
template< class T, class U, class... Args >
constexpr std::optional<T> make_optional( std::initializer_list<U> il,
Args&&... args );
```
_(since C++17)_

## Parameters
- `value`: the value to construct optional object with
- `il, args`: arguments to be passed to the constructor of T

## Return value
The constructed optional object.

## Notes
T need not be movable for overloads ([2,3](#Version_2)) due to guaranteed copy elision.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <optional>
#include <string>
#include <vector>
 
int main()
{
    auto op1 = std::make_optional<std::vector<char>>({'a','b','c'});
    std::cout << "op1: ";
    for (char c : op1.value())
        std::cout << c << ',';
    auto op2 = std::make_optional<std::vector<int>>(5, 2);
    std::cout << "\nop2: ";
    for (int i : *op2)
        std::cout << i << ',';
    std::string str{"hello world"};
    auto op3 = std::make_optional<std::string>(std::move(str));
    std::cout << "\nop3: " << std::quoted(op3.value_or("empty value")) << '\n';
    std::cout << "str: " << std::quoted(str) << '\n';
}
```

## See also
- [(constructor)](/cpp/utility/optional/optional/)
