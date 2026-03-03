---
title: "std::piecewise_construct, std::piecewise_construct_t"
source_path: "cpp/utility/piecewise_construct_t"
header: "<utility>"
category: "utility"
since: "C++11"
---

1) std::piecewise_construct_t is an empty class tag type used to disambiguate between different functions that take two tuple arguments.

## Declarations
```cpp
struct piecewise_construct_t { explicit piecewise_construct_t() = default; };
```
_(since C++11)_

```cpp
constexpr std::piecewise_construct_t piecewise_construct{};
```
_(since C++11) (inline since C++17)_

## Example
```cpp
#include <iostream>
#include <tuple>
#include <utility>
 
struct Foo
{
    Foo(std::tuple<int, float>)
    {
        std::cout << "Constructed a Foo from a tuple\n";
    }
 
    Foo(int, float)
    {
        std::cout << "Constructed a Foo from an int and a float\n";
    }
};
 
int main()
{
    std::tuple<int, float> t(1, 3.14);
 
    std::cout << "Creating p1...\n";
    std::pair<Foo, Foo> p1(t, t);
 
    std::cout << "Creating p2...\n";
    std::pair<Foo, Foo> p2(std::piecewise_construct, t, t);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2510 | C++11 | the default constructor was non-explicit, which could lead to ambiguity | made explicit |

## See also
- [(constructor)](/cpp/utility/pair/pair/)
