---
title: "std::reference_wrapper"
source_path: "cpp/utility/functional/reference_wrapper"
header: "<functional>"
---

std::reference_wrapper is a class template that wraps a reference in a copyable, assignable object.

## Declarations
```cpp
template< class T >
class reference_wrapper;
```
_(since C++11)_

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <list>
#include <numeric>
#include <random>
#include <vector>
 
void println(auto const rem, std::ranges::range auto const& v)
{
    for (std::cout << rem; auto const& e : v)
        std::cout << e << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::list<int> l(10);
    std::iota(l.begin(), l.end(), -4);
 
    // can't use shuffle on a list (requires random access), but can use it on a vector
    std::vector<std::reference_wrapper<int>> v(l.begin(), l.end());
 
    std::ranges::shuffle(v, std::mt19937{std::random_device{}()});
 
    println("Contents of the list: ", l);
    println("Contents of the list, as seen through a shuffled vector: ", v);
 
    std::cout << "Doubling the values in the initial list...\n";
    std::ranges::for_each(l, [](int& i) { i *= 2; });
 
    println("Contents of the list, as seen through a shuffled vector: ", v);
}
```

## See also
- [refcref](/cpp/utility/functional/ref/)
- [bind](/cpp/utility/functional/bind/)
- [unwrap_referenceunwrap_ref_decay](/cpp/utility/functional/unwrap_reference/)
