---
title: "std::basic_const_iterator<Iter>::operator constant-iterator"
source_path: "cpp/iterator/basic_const_iterator/operator"
category: "iterator"
since: "C++23"
---

Returns the converted constant iterator to which an underlying iterator [current](/cpp/iterator/basic_const_iterator/#Member_objects) can be explicitly or implicitly convertible.

## Declarations
```cpp
template< /*not-a-const-iterator*/ CI >
requires /*constant-iterator*/<CI> &&
std::convertible_to<Iter const&, CI>
constexpr operator CI() const &;
```
_(since C++23)_

```cpp
template< /*not-a-const-iterator*/ CI >
requires /*constant-iterator*/<CI> &&
std::convertible_to<Iter, CI>
constexpr operator CI() &&;
```
_(since C++23)_

## Example
```cpp
#include <iterator>
#include <ranges>
#include <vector>
 
void foo(std::vector<int>::const_iterator) {}
 
int main()
{
    auto v = std::vector<int>();
    {
        // ranges::cbegin below returns vector<int>::const_iterator
        auto i1 = std::ranges::cbegin(v);
        foo(i1); // okay
    }
 
    auto t = v | std::views::take_while([](int const x) { return x < 100; });
    {
        // ranges::cbegin below returns basic_const_iterator<vector<int>::iterator>
        auto i2 = std::ranges::cbegin(t);
        foo(i2); // error until P2836R1
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2836R1 | C++23 | basic_const_iterator doesn't follow its underlying type's convertibility | conversion operator provided |
