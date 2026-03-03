---
title: "std::ranges::view_interface"
source_path: "cpp/ranges/view_interface"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

std::ranges::view_interface is a helper class template for defining a view interface.

## Declarations
```cpp
template< class D >
requires std::is_class_v<D> && std::same_as<D, std::remove_cv_t<D>>
class view_interface;
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
#include <vector>
 
template<class T, class A>
class VectorView : public std::ranges::view_interface<VectorView<T, A>>
{
public:
    VectorView() = default;
 
    VectorView(const std::vector<T, A>& vec) :
        m_begin(vec.cbegin()), m_end(vec.cend())
    {}
 
    auto begin() const { return m_begin; }
 
    auto end() const { return m_end; }
 
private:
    typename std::vector<T, A>::const_iterator m_begin{}, m_end{};
};
 
int main()
{
    std::vector<int> v = {1, 4, 9, 16};
 
    VectorView view_over_v{v};
 
    // We can iterate with begin() and end().
    for (int n : view_over_v)
        std::cout << n << ' ';
    std::cout << '\n';
 
    // We get operator[] for free when inheriting from view_interface
    // since we satisfy the random_access_range concept.
    for (std::ptrdiff_t i = 0; i != view_over_v.size(); ++i)
        std::cout << "v[" << i << "] = " << view_over_v[i] << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3549 | C++20 | view_interface was required to be derived from view_base,which sometimes required multiple view_base subobjects in a view | inheritance removed |

## See also
- [ranges::subrange](/cpp/ranges/subrange/)
- [view](/cpp/ranges/view/)
