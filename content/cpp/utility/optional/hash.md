---
title: "std::hash<std::optional>"
source_path: "cpp/utility/optional/hash"
header: "<optional>"
category: "utility"
since: "C++17"
---

The template specialization of [std::hash](/cpp/utility/hash/) for the [std::optional](/cpp/utility/optional/) class allows users to obtain hashes of the values contained in optional objects.

## Declarations
```cpp
template< class T >
struct hash<std::optional<T>>;
```
_(since C++17)_

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
#include <unordered_set>
 
using namespace std::literals;
 
int main()
{
    using OptStr = std::optional<std::string>;
 
    // hash<optional> makes it possible to use unordered_set
    std::unordered_set<OptStr> s =
    {
        "ABC"s, "abc"s, std::nullopt, "def"s
    };
 
    for (const auto& o : s)
        std::cout << o.value_or("(null)") << '\t' << std::hash<OptStr>{}(o) << '\n';
}
```

## See also
- [hash](/cpp/utility/hash/)
