---
title: "std::set<Key,Compare,Allocator>::equal_range"
source_path: "cpp/container/set/equal_range"
category: "container"
since: "C++14"
---

Returns a range containing all elements with the given key in the container. The range is defined by two iterators, one pointing to the first element that is not less than key and another pointing to the first element greater than key. Alternatively, the first iterator may be obtained with [lower_bound()](/cpp/container/set/lower_bound/), and the second with [upper_bound()](/cpp/container/set/upper_bound/).

## Declarations
```cpp
std::pair<iterator, iterator> equal_range( const Key& key );
```

```cpp
std::pair<const_iterator, const_iterator> equal_range( const Key& key ) const;
```

```cpp
template< class K >
std::pair<iterator, iterator> equal_range( const K& x );
```
_(since C++14)_

```cpp
template< class K >
std::pair<const_iterator, const_iterator> equal_range( const K& x ) const;
```
_(since C++14)_

## Parameters
- `key`: key value to compare the elements to
- `x`: alternative value that can be compared to Key

## Return value
[std::pair](/cpp/utility/pair/) containing a pair of iterators defining the wanted range: the first pointing to the first element that is not less than key and the second pointing to the first element greater than key.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_generic_associative_lookup
201304L
(C++14)
Heterogeneous comparison lookup in associative containers, for overloads (3,4)

## Example
```cpp
#include <set>
#include <functional>
#include <print>
#include <ranges>
#include <string>
#include <string_view>
#include <tuple>
 
struct Names
{
    std::string forename, surname;
    friend auto operator<(const Names& lhs, const Names& rhs)
    {
        return std::tie(lhs.surname, lhs.forename) < std::tie(rhs.surname, rhs.forename);
    }
};
 
struct SurnameCompare
{
    std::string_view surname;
 
    friend bool operator<(const Names& lhs, const SurnameCompare& rhs)
    {
        return lhs.surname < rhs.surname;
    }
 
    friend bool operator<(const SurnameCompare& lhs, const Names& rhs)
    {
        return lhs.surname < rhs.surname;
    }
}; 
 
std::set<Names, std::less<>> characters
{
    {"Homer", "Simpson"},
    {"Marge", "Simpson"},
    {"Lisa", "Simpson"},
    {"Ned", "Flanders"},
    {"Joe", "Quimby"}
};
 
void print_unique(const Names& names)
{
    auto [begin, end] = characters.equal_range(names);
    std::print(
        "Found {} characters with name \"{} {}\"\n", 
        std::distance(begin, end), 
        names.forename, names.surname
    );
}
 
void print_by_surname(std::string_view surname)
{
    auto [begin, end] = characters.equal_range(SurnameCompare{surname});
    std::print("Found {} characters with surname \"{}\":\n", std::distance(begin, end), surname);
    for (const Names& names : std::ranges::subrange(begin, end))
        std::print("    {} {}\n", names.forename, names.surname);
}
 
int main()
{
    print_unique({"Maude", "Flanders"});
    print_unique({"Lisa", "Simpson"});
    print_by_surname("Simpson");
}
```

## See also
- [find](/cpp/container/set/find/)
- [contains](/cpp/container/set/contains/)
- [count](/cpp/container/set/count/)
- [upper_bound](/cpp/container/set/upper_bound/)
- [lower_bound](/cpp/container/set/lower_bound/)
- [equal_range](/cpp/algorithm/equal_range/)
