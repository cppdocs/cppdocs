---
title: "std::initializer_list"
source_path: "cpp/utility/initializer_list"
header: "<initializer_list>"
---

(not to be confused with [member initializer list](/cpp/language/initializer_list/))

## Declarations
```cpp
template< class T >
class initializer_list;
```
_(since C++11)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_initializer_lists
200806L
(C++11)
List-initialization and std::initializer_list

## Example
```cpp
#include <cassert>
#include <initializer_list>
#include <iostream>
#include <vector>
 
template<class T>
struct S
{
    std::vector<T> v;
 
    S(std::initializer_list<T> l) : v(l)
    {
         std::cout << "constructed with a " << l.size() << "-element list\n";
    }
 
    void append(std::initializer_list<T> l)
    {
        v.insert(v.end(), l.begin(), l.end());
    }
 
    std::pair<const T*, std::size_t> c_arr() const
    {
        return {&v[0], v.size()}; // copy list-initialization in return statement
                                  // this is NOT a use of std::initializer_list
    }
};
 
template<typename T>
void templated_fn(T) {}
 
int main()
{
    S<int> s = {1, 2, 3, 4, 5}; // copy list-initialization
    s.append({6, 7, 8});        // list-initialization in function call
 
    std::cout << "The vector now has " << s.c_arr().second << " ints:\n";    
    for (auto n : s.v)
        std::cout << n << ' ';
    std::cout << '\n';
 
    std::cout << "Range-for over brace-init-list: \n";
    for (int x : {-1, -2, -3}) // the rule for auto makes this ranged-for work
        std::cout << x << ' ';
    std::cout << '\n';
 
    auto al = {10, 11, 12}; // special rule for auto
    std::cout << "The list bound to auto has size() = " << al.size() << '\n';
    auto la = al; // a shallow-copy of top-level proxy object
    assert(la.begin() == al.begin()); // guaranteed: backing array is the same
 
    std::initializer_list<int> il{-3, -2, -1};
    assert(il.begin()[2] == -1); // note the replacement for absent operator[]
    il = al; // shallow-copy
    assert(il.begin() == al.begin()); // guaranteed
 
//  templated_fn({1, 2, 3}); // compiler error! "{1, 2, 3}" is not an expression,
                             // it has no type, and so T cannot be deduced
    templated_fn<std::initializer_list<int>>({1, 2, 3}); // OK
    templated_fn<std::vector<int>>({1, 2, 3});           // also OK
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2129 | C++11 | std::initializer_list could have explicitspecializations or partial specializations | the program isill-formed in this case |

## See also
- [span](/cpp/container/span/)
- [basic_string_view](/cpp/string/basic_string_view/)
