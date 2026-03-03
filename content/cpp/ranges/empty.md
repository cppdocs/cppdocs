---
title: "std::ranges::empty"
source_path: "cpp/ranges/empty"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Determines whether or not t has any elements.

## Declarations
```cpp
inline namespace /*unspecified*/ {
inline constexpr auto empty = /*unspecified*/;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr bool empty( T&& t );
```
_(since C++20)_

## Example
```cpp
#include <iostream>
#include <ranges>
#include <vector>
 
template<std::ranges::input_range R>
void print(char id, R&& r)
{
    if (std::ranges::empty(r))
    {
        std::cout << '\t' << id << ") Empty\n";
        return;
    }
 
    std::cout << '\t' << id << ") Elements:";
    for (const auto& element : r)
        std::cout << ' ' << element;
    std::cout << '\n';
}
 
int main()
{
    {
        auto v = std::vector<int>{1, 2, 3};
        std::cout << "(1) ranges::empty uses std::vector::empty:\n";
        print('a', v);
 
        v.clear();
        print('b', v);
    }
    {
        std::cout << "(2) ranges::empty uses ranges::size(initializer_list):\n";
        auto il = {7, 8, 9};
        print('a', il);
 
        print('b', std::initializer_list<int>{});
    }
    {
        std::cout << "(2) ranges::empty on a raw array uses ranges::size:\n";
        int array[] = {4, 5, 6}; // array has a known bound
        print('a', array);
    }
    {
        struct Scanty : private std::vector<int>
        {
            using std::vector<int>::begin;
            using std::vector<int>::end;
            using std::vector<int>::push_back;
            // Note: both empty() and size() are hidden
        };
 
        std::cout << "(3) calling ranges::empty on an object w/o empty() or size():\n";
        Scanty y;
        print('a', y);
        y.push_back(42);
        print('b', y);
    }
}
```

## See also
- [empty](/cpp/iterator/empty/)
