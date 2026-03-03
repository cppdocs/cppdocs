---
title: "std::hash <std::experimental::optional>"
source_path: "cpp/experimental/optional/hash"
header: "<experimental/optional>"
category: "experimental"
---

The template specialization of [std::hash](/cpp/utility/hash/) for the [std::experimental::optional](/cpp/experimental/optional/) class allows users to obtain hashes of the values contained in optional objects.

## Declarations
```cpp
template< class T >
struct hash<std::experimental::optional<T>>;
```
_(library fundamentals TS)_

## Example
```cpp
#include <experimental/optional>
#include <iostream>
#include <string>
#include <unordered_set>
using namespace std::literals;
 
int main()
{
    // hash<optional> makes it possible to use unordered_set
    std::unordered_set<std::experimental::optional<std::string>> s = {
        "abc"s, std::experimental::nullopt, "def"s
    };
 
    for (const auto& o : s)
        std::cout << o.value_or("(null)") << ' ';
    std::cout << '\n';
}
```

## See also
- [hash](/cpp/utility/hash/)
