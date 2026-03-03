---
title: "std::identity"
source_path: "cpp/utility/functional/identity"
header: "<functional>"
category: "utility"
since: "C++20"
---

std::identity is a function object type whose operator() returns its argument unchanged.

## Declarations
```cpp
struct identity;
```
_(since C++20)_

## Parameters
- `t`: argument to return

## Return value
[std::forward](/cpp/utility/forward/)<T>(t).

## Notes
std::identity serves as the default projection in [constrained algorithms](/cpp/algorithm/ranges/). Its direct usage is usually not needed.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <ranges>
#include <string>
 
struct Pair
{
    int n;
    std::string s;
    friend std::ostream& operator<<(std::ostream& os, const Pair& p)
    {
        return os << '{' << p.n << ", " << p.s << '}';
    }
};
 
// A range-printer that can print projected (modified) elements of a range.
template<std::ranges::input_range R,
         typename Projection = std::identity> //<- Notice the default projection
void print(std::string_view const rem, R&& range, Projection projection = {})
{
    std::cout << rem << '{';
    std::ranges::for_each(
        range,
        [O = 0](const auto& o) mutable { std::cout << (O++ ? ", " : "") << o; },
        projection
    );
    std::cout << "}\n";
}
 
int main()
{
    const auto v = {Pair{1, "one"}, {2, "two"}, {3, "three"}};
 
    print("Print using std::identity as a projection: ", v);
    print("Project the Pair::n: ", v, &Pair::n);
    print("Project the Pair::s: ", v, &Pair::s);
    print("Print using custom closure as a projection: ", v,
        [](Pair const& p) { return std::to_string(p.n) + ':' + p.s; });
}
```

## See also
- [type_identity](/cpp/types/type_identity/)
