---
title: "std::unexpected"
source_path: "cpp/utility/expected/unexpected"
header: "<expected>"
category: "utility"
since: "C++23"
---

The class template std::unexpected represents an unexpected value stored in std::expected. In particular, std::expected has constructors with std::unexpected as a single argument, which creates an [expected](/cpp/utility/expected/) object that contains an unexpected value.

## Declarations
```cpp
template< class E >
class unexpected;
```
_(since C++23)_

## Parameters
- `e`: value with which to initialize the contained value
- `args...`: arguments with which to initialize the contained value
- `il`: initializer list with which to initialize the contained value

## Notes
Prior to C++17, the name [std::unexpected](/cpp/error/unexpected/) denoted the function called by the C++ runtime when a dynamic exception specification was violated.

## Example
```cpp
#include <expected>
#include <iostream>
 
enum class error
{
    compile_time_error,
    runtime_error
};
 
[[nodiscard]] auto unexpected_runtime_error() -> std::expected<int, error>
{
    return std::unexpected(error::runtime_error);
}
 
int main()
{
    std::expected<double, int> ex = std::unexpected(3);
 
    if (!ex)
        std::cout << "ex contains an error value\n";
 
    if (ex == std::unexpected(3))
        std::cout << "The error value is equal to 3\n";
 
    const auto e = unexpected_runtime_error();
 
    e.and_then([](const auto& e) -> std::expected<int, error>
    {
        std::cout << "and_then: " << int(e); // not printed
        return {};
    })
    .or_else([](const auto& e) -> std::expected<int, error>
    {
        std::cout << "or_else: " << int(e); // prints this line
        return {};
    });
}
```

## See also
- [(constructor)](/cpp/utility/expected/expected/)
- [operator==](/cpp/utility/expected/operator_cmp/)
