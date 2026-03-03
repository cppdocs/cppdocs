---
title: "std::map<Key,T,Compare,Allocator>::map"
source_path: "cpp/container/map/map"
category: "container"
since: "C++11"
---

Constructs new container from a variety of data sources and optionally using user supplied allocator alloc or comparison function object comp.

## Declarations
```cpp
map();
```
_(until C++11)_

```cpp
map()
: map(Compare()) {}
```
_(since C++11)_

```cpp
explicit map( const Compare& comp,
const Allocator& alloc = Allocator() );
```

```cpp
explicit map( const Allocator& alloc );
```
_(since C++11)_

```cpp
template< class InputIt >
map( InputIt first, InputIt last,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```

```cpp
template< class InputIt >
map( InputIt first, InputIt last,
const Allocator& alloc )
: map(first, last, Compare(), alloc) {}
```
_(since C++14)_

```cpp
map( const map& other );
```

```cpp
map( const map& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
map( map&& other );
```
_(since C++11)_

```cpp
map( map&& other, const Allocator& alloc );
```
_(since C++11)_

```cpp
map( std::initializer_list<value_type> init,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++11)_

```cpp
map( std::initializer_list<value_type> init,
const Allocator& alloc )
: map(init, Compare(), alloc) {}
```
_(since C++14)_

```cpp
template< container-compatible-range<value_type> R >
map( std::from_range_t, R&& rg,
const Compare& comp = Compare(),
const Allocator& alloc = Allocator() );
```
_(since C++23)_

```cpp
template< container-compatible-range<value_type> R >
map( std::from_range_t, R&& rg,
const Allocator& alloc )
: map(std::from_range, std::forward<R>(rg), Compare(), alloc) {}
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
#include <iomanip>
#include <iostream>
#include <map>
#include <string>
 
template<typename Key, typename Value, typename Cmp>
std::ostream& operator<<(std::ostream& os, std::map<Key, Value, Cmp> const& map)
{
    os << "{ ";
    for (auto comma{map.size()}; auto const& p : map)
        os << '\'' << p.first << "' is " << p.second << (--comma ? ", " : " ");
    return os << "}\n";
}
 
struct Point
{
    double x, y;
 
    friend std::ostream& operator<<(std::ostream& os, Point pt)
    {
        return os << '(' << pt.x << ", " << pt.y << ')';
    }
};
 
struct PointCmp
{
    bool operator()(const Point& lhs, const Point& rhs) const
    {
        return lhs.x < rhs.x; // NB: y is intentionally ignored
    }
};
 
int main()
{
    // (1) Default constructor
    std::map<std::string, int> map1;
    map1["something"] = 69;
    map1["anything"] = 199;
    map1["that thing"] = 50;
    std::cout << "map1 = " << map1;
 
    // (4) Range constructor
    std::map<std::string, int> iter(map1.find("anything"), map1.end());
    std::cout << "\niter = " << iter;
    std::cout << "map1 = " << map1;
 
    // (6) Copy constructor
    std::map<std::string, int> copied(map1);
    std::cout << "\ncopied = " << copied;
    std::cout << "map1 = " << map1;
 
    // (8) Move constructor
    std::map<std::string, int> moved{std::move(map1)};
    std::cout << "\nmoved = " << moved;
    std::cout << "map1 = " << map1;
 
    // (10) Initializer list constructor
    const std::map<std::string, int> init
    {
        {"this", 100},
        {"can", 100},
        {"be", 100},
        {"const", 100}
    };
    std::cout << "\ninit = " << init;
 
    std::cout << "\nCustom Key class option 1:\n";
    // Use a comparison struct
    std::map<Point, double, PointCmp> mag =
    {
        {{5, -12}, 13},
        {{3, 4}, 5},
        {{-8, -15}, 17}
    };
    std::cout << "mag = " << mag << '\n';
 
    std::cout << "Custom Key class option 2:\n";
    // Use a comparison lambda
    // This lambda sorts points according to their magnitudes, where
    // these magnitudes are taken from the local variable mag.
    auto cmpLambda = [&mag](const Point& lhs, const Point& rhs)
    {
        return mag[lhs] < mag[rhs];
    };
 
    // You could also use a lambda that is not dependent on local variables, like this:
    // auto cmpLambda = [](const Point& lhs, const Point& rhs){ return lhs.y < rhs.y; };
    std::map<Point, double, decltype(cmpLambda)> magy(cmpLambda);
 
    // Various ways of inserting elements:
    magy.insert(std::pair<Point, double>({5, -12}, 13));
    magy.insert({{3, 4}, 5});
    magy.insert({Point{-8.0, -15.0}, 17});    
    std::cout << "magy = " << magy << '\n';
 
    std::cout << "Construction from a range:\n";
    using PS = std::pair<const std::string, int>;
    const auto rg = {PS{"one", 1}, {"one", 101}, {"two", 2}, {"three", 3}};
#if __cpp_lib_containers_ranges
    std::map<std::string, int> nums(std::from_range, rg); // overload (12)
#else
    std::map<std::string, int> nums(rg.begin(), rg.end()); // fallback to (4)
#endif
    std::cout << "nums = " << nums << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2076 | C++11 | overload (4) conditionally required Keyand T to be CopyInsertable into *this | not required |
| LWG 2193 | C++11 | the default constructor was explicit | made non-explicit |

## See also
- [operator=](/cpp/container/map/operator/)
