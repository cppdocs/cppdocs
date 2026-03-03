---
title: "deduction guides for std::basic_string"
source_path: "cpp/string/basic_string/deduction_guides"
header: "<string>"
category: "string"
since: "C++17"
---

1) This [deduction guide](/cpp/language/ctad/) is provided for [std::basic_string](/cpp/string/basic_string/) to allow deduction from an iterator range. This overload participates in overload resolution only if InputIt satisfies [LegacyInputIterator](/cpp/named_req/inputiterator/) and Alloc satisfies [Allocator](/cpp/named_req/allocator/).

## Declarations
```cpp
template< class InputIt, class Alloc = std::allocator<
typename std::iterator_traits<InputIt>::value_type> >
basic_string( InputIt, InputIt, Alloc = Alloc() )
-> basic_string<typename std::iterator_traits<InputIt>::value_type,
std::char_traits<
typename std::iterator_traits<InputIt>::value_type>, Alloc>;
```
_(since C++17)_

```cpp
template< class CharT,
class Traits,
class Alloc = std::allocator<CharT> >
explicit basic_string( std::basic_string_view<CharT, Traits>, const Alloc& = Alloc() )
-> basic_string<CharT, Traits, Alloc>;
```
_(since C++17)_

```cpp
template< class CharT,
class Traits,
class Alloc = std::allocator<CharT>> >
basic_string( std::basic_string_view<CharT, Traits>,
typename /* see below */::size_type,
typename /* see below */::size_type,
const Alloc& = Alloc() )
-> basic_string<CharT, Traits, Alloc>;
```
_(since C++17)_

```cpp
template< ranges::input_range R,
class Alloc = std::allocator<ranges::range_value_t<R>> >
basic_string( std::from_range_t, R&&, Alloc = Alloc() )
-> basic_string<ranges::range_value_t<R>,
std::char_traits<ranges::range_value_t<R>>, Alloc>;
```
_(since C++23)_

## Notes
Guides ([2,3](#Version_2)) are needed because the [std::basic_string](/cpp/string/basic_string/) constructors for [std::basic_string_view](/cpp/string/basic_string_view/)s are made templates to avoid causing ambiguities in existing code, and those templates do not support class template argument deduction.

## Example
```cpp
#include <cassert>
#include <string>
#include <vector>
 
int main()
{
    std::vector<char> v = {'a', 'b', 'c'};
    std::basic_string s1(v.begin(), v.end()); // uses deduction guide (1)
    assert(s1 == "abc");
 
#if __cpp_lib_containers_ranges >= 202202L
    std::vector<wchar_t> v4{0x43, 43, 053, 0x32, 0x33};
    std::basic_string s4(std::from_range, v4); // uses deduction guide (4)
    assert(s4 == L"C++23");
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3075 | C++17 | deduction from basic_string_view was unsupported (exacerbated by LWG issue 2946) | deduction guides added |
