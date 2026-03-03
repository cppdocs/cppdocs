---
title: "std::ranges::to"
source_path: "cpp/ranges/to"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

The overloads of the range conversion function construct a new non-view object from a source range as its first argument by calling a constructor taking a range, a std::from_range_t tagged ranged constructor, a constructor taking an iterator-sentinel pair, or by back inserting each element of the source range into the arguments-constructed object.

## Declarations
```cpp
template< class C, ranges::input_range R, class... Args >
requires (!ranges::view<C>)
constexpr C to( R&& r, Args&&... args );
```
_(since C++23)_

```cpp
template< template< class... > class C,
ranges::input_range R, class... Args >
constexpr auto to( R&& r, Args&&... args );
```
_(since C++23)_

```cpp
template< class C, class... Args >
requires (!ranges::view<C>)
constexpr /*range adaptor closure*/ to( Args&&... args );
```
_(since C++23)_

```cpp
template< template< class... > class C, class... Args >
constexpr /*range adaptor closure*/ to( Args&&... args );
```
_(since C++23)_

```cpp
Helper templates
```

```cpp
template< class Container >
constexpr bool /*reservable-container*/ =
ranges::sized_range<Container> &&
requires (Container& c, ranges::range_size_t<Container> n)
{
c.reserve(n);
{ c.capacity() } -> std::same_as<decltype(n)>;
{ c.max_size() } -> std::same_as<decltype(n)>;
};
```
_(exposition only*)_

```cpp
template< class Container, class Reference >
constexpr bool /*container-appendable*/ =
requires (Container& c, Reference&& ref)
{
requires
(
requires { c.emplace_back(std::forward<Reference>(ref)); } ||
requires { c.push_back(std::forward<Reference>(ref)); } ||
requires { c.emplace(c.end(), std::forward<Reference>(ref)); } ||
requires { c.insert(c.end(), std::forward<Reference>(ref)); }
);
};
```
_(exposition only*)_

```cpp
template< class Reference, class C >
constexpr auto /*container-appender*/( C& c );
```
_(exposition only*)_

```cpp
template< class R, class T >
concept /*container-compatible-range*/ =
ranges::input_range<R> &&
std::convertible_to<ranges::range_reference_t<R>, T>;
```
_(exposition only*)_

## Parameters
- `r`: a source range object
- `args`: list of the arguments to (1,2) construct a range or (3,4) bind to the last parameters of range adaptor closure object

## Return value
The returned object behaves as if it has no target object, and an [std::tuple](/cpp/utility/tuple/) object tup constructed with [std::tuple](/cpp/utility/tuple/)<[std::decay_t](/cpp/types/decay/)<Args>...>([std::forward](/cpp/utility/forward/)<Args>(args)...), except that the returned object's assignment behavior is unspecified and the names are for exposition only.

## Notes
The insertion of elements into the container may involve copy which can be less efficient than move because lvalue references are produced during the indirection call. Users can opt-in to use [views::as_rvalue](/cpp/ranges/as_rvalue_view/) to adapt the range in order for their elements to always produce an rvalue reference during the indirection call which implies move.

The parentheses are mandatory when using the pipe syntax.

## Example
```cpp
#include <boost/container/devector.hpp>
#include <concepts>
#include <list>
#include <initializer_list>
#include <iostream>
#include <print>
#include <ranges>
#include <regex>
#include <string>
#include <vector>
 
int main()
{
    auto vec = std::views::iota(1, 5)
             | std::views::transform([](int v){ return v * 2; })
             | std::ranges::to<std::vector>();
 
    static_assert(std::same_as<decltype(vec), std::vector<int>>);
    std::println("{}", vec);
 
    auto list = vec | std::views::take(3) | std::ranges::to<std::list<double>>();
    std::println("{}", list);
}
 
void ctor_demos()
{
    // 1.a.1) Direct init
    {
        char array[]{'a', 'b', '\0', 'c'};
 
        // Argument type is convertible to result value type:
        auto str_to = std::ranges::to<std::string>(array);
        // Equivalent to
        std::string str(array);
 
        // Result type is not an input range:
        auto re_to = std::ranges::to<std::regex>(array);
        // Equivalent to
        std::regex re(array);
    }
 
    // 1.a.2) from_range ctor
    {
        auto list = {'a', 'b', '\0', 'c'};
 
        // Argument type is convertible to result value type:
        auto str_to = std::ranges::to<std::string>(list);
        // Equivalent to
        std::string str(std::from_range, list);
 
        // Result type is not an input range:
        auto pair_to = std::ranges::to<std::pair<std::from_range_t, bool>>(true);
        // Equivalent to
        std::pair<std::from_range_t, bool> pair(std::from_range, true);
    }
 
    // 1.a.3) iterator pair ctor
    {
        auto list = {'a', 'b', '\0', 'c'};
 
        // Argument type is convertible to result value type:
        auto devector_to = std::ranges::to<boost::container::devector<char>>(list);
        // Equivalent to
        boost::container::devector<char> devector(std::ranges::begin(list), 
                                                  std::ranges::end(list));
 
        // Result type is not an input range:
        std::regex re;
        auto it_to = std::ranges::to<std::cregex_iterator>(list, re);
        // Equivalent to
        std::cregex_iterator it(std::ranges::begin(list), std::ranges::end(list), re);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3984 | C++23 | the nested construction branch of ranges::to resulted toprogram ill-formed if R& does not model viewable_range | made well-formed |
| LWG 4016 | C++23 | the container insertion branch ofranges::to involved use of insert iterators | replaced with direct appendingof elements to container |
