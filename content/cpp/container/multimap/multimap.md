---
title: "std::multimap<Key,T,Compare,Allocator>::multimap"
source_path: "cpp/container/multimap/multimap"
category: "container"
since: "C++11"
---

Constructs new container from a variety of data sources and optionally using user supplied allocator alloc or comparison function object comp.

## Declarations
```cpp
multimap();
```
_(until C++11)_

```cpp
multimap()
: multimap(Compare()) {}
```
_(since C++11)_

```cpp
explicit multimap( const Compare& comp,
const Allocator& alloc = Allocator() );
```

```cpp
explicit multimap( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
multimap( InputIt first, InputIt last,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```

```cpp
template< class InputIt >
multimap( InputIt first, InputIt last,
const Allocator& alloc )
: multimap(first, last, Compare(), alloc) {}
```
_(since C++14)_

```cpp
multimap( const multimap& other );
```

```cpp
multimap( const multimap& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
multimap( multimap&& other );
```
_(since C++11)_

```cpp
multimap( multimap&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
multimap( std::initializer_list<value_type> init,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
multimap( std::initializer_list<value_type> init,
const Allocator& alloc )
: multimap(init, Compare(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
multimap( std::from_range_t, R&& rg,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
multimap( std::from_range_t, R&& rg,
const Allocator& alloc )
: multimap(std::from_range, std::forward<R>(rg), Compare(), alloc) {}
```
_(since C++23)_

## Parameters
- `alloc`: allocator to use for all memory allocations of this container
- `comp`: comparison function object to use for all comparisons of keys
- `first, last`: the range to copy the elements from
- `other`: another container to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with
- `rg`: a container compatible range, that is, an input_range whose elements are convertible to value_type

## Notes
After container move construction (overload (8,9)), references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

Although not formally required until C++23, some implementations has already put the template parameter Allocator into [non-deduced contexts](/cpp/language/template_argument_deduction/#Non-deduced_contexts) in earlier modes.

## Example
```cpp
#include <iostream>
#include <map>
#include <utility>
 
struct Point { double x, y; };
 
struct PointCmp
{
    bool operator()(const Point& lhs, const Point& rhs) const
    {
        return lhs.x < rhs.x; // NB. ignores y on purpose
    }
};
 
template <typename Key, typename Value, typename Cmp>
void println(auto rem, std::multimap<Key, Value, Cmp> const& map)
{
    std::cout << rem << "{ ";
    for (auto n{map.size()}; auto const& p : map)
        std::cout << '[' << p.first << ":" << p.second << (--n ? "], " : "]");
    std::cout << " }\n";
}
 
int main()
{
    std::multimap<int, int> m1 =
    {
        {1, 1}, {2, 2}, {3, 3}, {4, 4}, {4, 4}, {3, 3}, {2, 2}, {1, 1}
    };
    println("m1 = ", m1);
 
    // Custom comparison
    std::multimap<Point, double, PointCmp> mag
    {
        {{5, 12}, 13},
        {{3, 4}, 5},
        {{8, 15}, 17},
        {{3, -3}, -1}
    };
    for (auto p : mag)
        std::cout << "The magnitude of (" << p.first.x << ", " << p.first.y << ")"
                     " is " << p.second << '\n';
 
    std::cout << "Construction from a range:\n";
    using PS = std::pair<int, std::string>;
    const auto rg = {PS{3, "Earth"}, {2, "Venus"}, {1, "Mercury"}, {3, "Moon"}};
#if __cpp_lib_containers_ranges
    std::multimap<int, std::string> m2(std::from_range, rg); // overload (12)
#else
    std::multimap<int, std::string> m2(rg.begin(), rg.end()); // fallback to (4)
#endif
    println("m2 = ", m2);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2076 | C++11 | overload (4) conditionally required Keyand T to be CopyInsertable into *this | not required |
| LWG 2193 | C++11 | the default constructor was explicit | made non-explicit |

## See also
- [operator=](/cpp/container/multimap/operator/)
