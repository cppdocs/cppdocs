---
title: "std::move_iterator<Iter>::operator*,->"
source_path: "cpp/iterator/move_iterator/operator"
category: "iterator"
---

Returns an rvalue reference or pointer to the current element.

## Declarations
```cpp
reference operator*() const;
```
_(since C++11) (constexpr since C++17)_

```cpp
pointer operator->() const;
```
_(since C++11) (constexpr since C++17) (deprecated in C++20)_

## Notes
operator-> is deprecated because deferencing its result may yield an lvalue. This may lead to unintended behavior.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string>
#include <vector>
 
void print(auto rem, const auto& v)
{
    for (std::cout << rem; const auto& e : v)
        std::cout << std::quoted(e) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<std::string> p{"alpha", "beta", "gamma", "delta"}, q;
    print("1) p: ", p);
    for (std::move_iterator it{p.begin()}, end{p.end()}; it != end; ++it)
    {
        it->push_back('!'); // calls -> string::push_back(char)
        q.emplace_back(*it); // *it <- overload (1)
    }
    print("2) p: ", p);
    print("3) q: ", q);
 
    std::vector v{1, 2, 3};
    std::move_iterator it{v.begin()};
    // *it = 13; // error: using rvalue as lvalue
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2106 | C++11 | operator* would return a danglingreference if *current yields a prvalue | returns the objectin this case |

## See also
- [operator[]](/cpp/iterator/move_iterator/operator_at/)
